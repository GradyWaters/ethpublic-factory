export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Only loosen CSP for Decap CMS admin pages
  if (url.pathname.startsWith("/admin")) {
    const res = await context.next();
    const headers = new Headers(res.headers);

    headers.set(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'"
    );

    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  }

  return context.next();
}
