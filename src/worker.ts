interface Env {
  ASSETS: Fetcher;
}

const APEX_HOST = 'waxmy.hair';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === '/sitemap.xml') {
      return Response.redirect(`${url.protocol}//${APEX_HOST}/sitemap-index.xml`, 301);
    }

    if (url.pathname.endsWith('/index.html')) {
      url.pathname = url.pathname.replace(/\/index\.html$/, '') || '/';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
