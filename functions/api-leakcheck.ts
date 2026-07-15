export async function onRequest(context: any) {
  const url = new URL(context.request.url);
  // Forward search query and path to leakcheck.io
  const targetUrl = "https://leakcheck.io" + url.pathname.replace(/^\/api-leakcheck/, "") + url.search;

  // Create a new request to forward
  const newRequest = new Request(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body
  });

  try {
    const response = await fetch(newRequest);
    return response;
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }
}
