export interface DocumentedLeak {
  id: string;
  title: string;
  date: string;
  size: number;
  institution: string;
  exposedData: string[];
  verificationSource: "OCCRP" | "RFE/RL" | "Independent Media" | "Independent Civic Watchdog";
  severity: "Critical" | "High" | "Medium" | "Low";
  description: string;
  methodology: string;
  protectionAdvice: string[];
  referenceUrl?: string;
}

export const DOCUMENTED_LEAKS: DocumentedLeak[] = [];

function formatBreachTitle(id: string): string {
  if (!id) return "Unknown Breach";
  return id
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, char => char.toUpperCase())
    .trim();
}
const isLocalhost = typeof window !== "undefined" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname.includes("192.168."));

const API_XPOSED_BASE = isLocalhost ? "/api-xposed" : "https://api.xposedornot.com";
const API_LEAKCHECK_BASE = "/api-leakcheck";
const API_ALEPH_BASE = isLocalhost ? "/api-aleph" : "https://aleph.occrp.org";

let cachedBreachesList: any[] | null = null;

async function fetchFullBreachesList(): Promise<any[]> {
  if (cachedBreachesList) return cachedBreachesList;
  try {
    const res = await fetch(`${API_XPOSED_BASE}/v1/breaches`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.exposedBreaches) {
        cachedBreachesList = data.exposedBreaches;
        return cachedBreachesList;
      }
    }
  } catch (e) {
    console.error("Failed to load breaches catalog:", e);
  }
  return [];
}

// Helper to determine exposures using live open APIs.
export async function checkEmailExposure(email: string): Promise<{
  isExposed: boolean;
  exposedCount: number;
  results: DocumentedLeak[];
}> {
  const results: DocumentedLeak[] = [];
  let totalExposed = 0;

  try {
    const res = await fetch(`${API_LEAKCHECK_BASE}/api/public?check=${encodeURIComponent(email)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.found > 0) {
        totalExposed += data.found;
        const fieldsMap: Record<string, string> = {
          email: "Email addresses",
          password: "Passwords (hashed/plain)",
          phone: "Phone numbers",
          username: "Usernames",
          ip: "IP addresses",
          name: "Full names",
          dob: "Dates of birth",
          address: "Physical addresses"
        };
        const exposed = (data.fields || []).map((f: string) => fieldsMap[f] || f);

        if (data.sources && data.sources.length > 0) {
          data.sources.forEach((src: any, idx: number) => {
            results.push({
              id: `leak-${idx}-${src.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
              title: `${src.name} Breach`,
              institution: src.name,
              date: src.date || "Unknown date",
              size: data.found,
              description: `Account credentials matching this search were identified in the public release of the ${src.name} archive.`,
              exposedData: exposed.length > 0 ? exposed : ["Email address"],
              severity: data.fields?.includes("password") ? "High" : "Medium",
              verificationSource: "Independent Civic Watchdog",
              methodology: "Automated lookups using keyless public API services.",
              protectionAdvice: [
                "Immediately change passwords associated with this email address.",
                "Set up a dedicated password manager to create unique credentials.",
                "Enable two-factor authentication (2FA) wherever supported."
              ]
            });
          });
        } else {
          results.push({
            id: `generic-leak-incident`,
            title: `Undisclosed Data Leak`,
            institution: `Undisclosed Source`,
            date: `Unknown date`,
            size: data.found,
            description: `Credentials associated with this email address were found in a historical data breach index.`,
            exposedData: exposed.length > 0 ? exposed : ["Email address"],
            severity: data.fields?.includes("password") ? "High" : "Medium",
            verificationSource: "Independent Civic Watchdog",
            methodology: "Identified in public credential exposure indices.",
            protectionAdvice: [
              "Immediately change passwords associated with this email address.",
              "Set up a dedicated password manager to create unique credentials.",
              "Enable two-factor authentication (2FA) wherever supported."
            ]
          });
        }
      }
    }
  } catch (err) {
    console.error("LeakCheck API error:", err);
  }

  // Query XposedOrNot email check
  try {
    const xposedRes = await fetch(`${API_XPOSED_BASE}/v1/check-email/${encodeURIComponent(email)}`);
    if (xposedRes.ok) {
      const xposedData = await xposedRes.json();
      if (xposedData && xposedData.breaches && Array.isArray(xposedData.breaches[0])) {
        const breachesList: string[] = xposedData.breaches[0];
        const fullList = await fetchFullBreachesList();
        
        breachesList.forEach((breachName: string) => {
          // Avoid duplicate leak entries if already returned by LeakCheck
          const duplicate = results.some(r => r.institution.toLowerCase() === breachName.toLowerCase());
          if (!duplicate) {
            // Find full details from the XposedOrNot breaches catalog
            const details = fullList?.find((b: any) => b.breachID.toLowerCase() === breachName.toLowerCase());
            const passwordRiskHigh = details?.passwordRisk === "plaintext" || details?.passwordRisk === "easytocrack";
            
            const formattedName = details ? formatBreachTitle(details.breachID) : formatBreachTitle(breachName);
            results.push({
              id: `xposed-${breachName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
              title: `${formattedName} Data Exposure`,
              institution: details?.domain || formattedName,
              date: details?.breachedDate?.split("T")[0] || "Unknown date",
              size: details?.exposedRecords || 0,
              description: details?.exposureDescription || `Security analysis reveals this email address was included in the ${formattedName} dataset exposure.`,
              exposedData: details?.exposedData || ["Email addresses"],
              severity: passwordRiskHigh ? "High" : "Medium",
              verificationSource: "Independent Civic Watchdog",
              methodology: "Discovered via public threat intelligence exposure lists.",
              protectionAdvice: [
                "Change credentials associated with this identity immediately.",
                "Conduct audit of services linked to this email.",
                "Configure 2FA (Two-Factor Authentication)."
              ],
              referenceUrl: details?.referenceURL || ""
            });
            totalExposed += 1;
          }
        });
      }
    }
  } catch (err) {
    console.error("XposedOrNot check-email error:", err);
  }

  const domain = email.split("@")[1];
  if (domain && !["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "mail.ru", "yandex.ru"].includes(domain)) {
    try {
      const alephRes = await fetch(`${API_ALEPH_BASE}/api/2/search?q=${encodeURIComponent(domain)}&limit=5`);
      if (alephRes.ok) {
        const alephData = await alephRes.json();
        if (alephData.results && alephData.results.length > 0) {
          alephData.results.slice(0, 4).forEach((item: any) => {
            const schemaLabel = item.schema || "Investigative Record";
            const collectionLabel = item.collection?.label || "Public Investigative Index";
            const formattedCaption = formatBreachTitle(item.caption || "Document Record");
            const formattedCollection = formatBreachTitle(collectionLabel);
            const formattedSchema = formatBreachTitle(schemaLabel);
            results.push({
              id: `aleph-${item.id}`,
              title: `Investigative Match: ${formattedCaption}`,
              institution: formattedCollection,
              date: item.created_at?.split("T")[0] || item.updated_at?.split("T")[0] || "Unknown date",
              size: 1,
              description: `Organizational domain "${domain}" matched an active document or entity in the public investigation archives. Record Type: ${formattedSchema}. Collection Source: ${formattedCollection}.`,
              exposedData: ["Domain Records", "Investigative Reports"],
              severity: "Low",
              verificationSource: "OCCRP",
              methodology: "Public entity and document indexation check via OCCRP Aleph API.",
              protectionAdvice: [
                "Verify security policies for company/organizational email accounts.",
                "Ensure domain SPF/DKIM records are correctly configured.",
                "Conduct internal audits of public-facing endpoints."
              ],
              referenceUrl: item.links?.ui || `https://aleph.occrp.org/entities/${item.id}`
            });
          });
        }
      }
    } catch (e) {
      console.error("OCCRP Aleph fetch error:", e);
    }
  }

  return {
    isExposed: results.length > 0,
    exposedCount: totalExposed || results.length,
    results
  };
}

export async function getLatestBreaches(): Promise<DocumentedLeak[]> {
  const allLeaks: DocumentedLeak[] = [];

  // Fetch XposedOrNot breaches
  try {
    const res = await fetch("/api-xposed/v1/breaches");
    if (res.ok) {
      const data = await res.json();
      if (data && data.exposedBreaches) {
        const xposedMapped = data.exposedBreaches.map((b: any): DocumentedLeak => {
          const passwordRiskHigh = b.passwordRisk === "plaintext" || b.passwordRisk === "easytocrack";
          const formattedName = formatBreachTitle(b.breachID);
          return {
            id: b.breachID,
            title: `${formattedName} Data Exposure`,
            date: b.breachedDate?.split("T")[0] || "Unknown date",
            size: b.exposedRecords || 0,
            institution: b.domain || formattedName,
            exposedData: b.exposedData || ["Email addresses"],
            verificationSource: "Independent Civic Watchdog",
            severity: passwordRiskHigh ? "High" : "Medium",
            description: b.exposureDescription || `A data breach incident affecting ${formattedName}.`,
            methodology: "Data verified and cataloged via XposedOrNot public threat intelligence feed.",
            protectionAdvice: [
              "Check if your accounts used this domain or email prefix.",
              "Enable multi-factor authentication (MFA) on all related services.",
              "Use unique passwords for every online profile."
            ],
            referenceUrl: b.referenceURL || ""
          };
        });
        allLeaks.push(...xposedMapped);
      }
    }
  } catch (err) {
    console.error("Error fetching breaches feed:", err);
  }

  // Fetch OCCRP Aleph collections
  try {
    const pageOffsets = [0, 30, 60, 90, 120, 150, 180, 210];
    const promises = pageOffsets.map(offset =>
      fetch(`/api-aleph/api/2/collections?limit=30&offset=${offset}`)
        .then(res => res.ok ? res.json() : null)
        .catch(() => null)
    );
    const responses = await Promise.all(promises);
    const combinedResults: any[] = [];
    responses.forEach(data => {
      if (data && data.results) {
        combinedResults.push(...data.results);
      }
    });

    if (combinedResults.length > 0) {
      // Deduplicate collections by id
      const uniqueCollections = Array.from(
        new Map(combinedResults.map(item => [item.id, item])).values()
      );

        const alephMapped = uniqueCollections
          .filter((c: any) => c.count && c.count > 0)
          .map((c: any): DocumentedLeak => ({
          id: `aleph-col-${c.id}`,
          title: formatBreachTitle(c.label || "OCCRP Investigative Dataset"),
          date: c.created_at?.split("T")[0] || c.updated_at?.split("T")[0] || "Unknown date",
          size: c.count || 0,
          institution: c.category ? `OCCRP Category: ${formatBreachTitle(c.category)}` : "OCCRP Aleph",
          exposedData: ["Corporate records", "Investigative files"],
          verificationSource: "OCCRP",
          severity: "Low",
          description: c.summary || `Investigative registry data indexed under the '${c.category || 'leak'}' collection category.`,
          methodology: "Public interest data cataloged by the Organized Crime and Corruption Reporting Project.",
          protectionAdvice: [
            "Conduct searches on associated corporate entities in public registries.",
            "Verify compliance and ownership structures of related organizations.",
            "Ensure company domain credentials are not reused."
          ],
          referenceUrl: c.links?.ui || `https://aleph.occrp.org/datasets/${c.id}`
        }));
      allLeaks.push(...alephMapped);
    }
  } catch (err) {
    console.error("Error fetching OCCRP collections for database:", err);
  }

  return allLeaks;
}


