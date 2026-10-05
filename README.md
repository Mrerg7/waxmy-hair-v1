# waxmy.hair

Sales site for the domain **waxmy.hair**. The name is for sale. This is not a waxing studio.

## Stack

- Astro static site (`output: 'static'`)
- TypeScript + Tailwind CSS 4
- Cloudflare Workers Static Assets via Wrangler (free plan, no Worker script)
- `@astrojs/sitemap`, `public/robots.txt`, `public/llms.txt`
- JSON-LD for WebSite, Organization, WebPage, Article, FAQ, and breadcrumbs-style pages
- No Product rich result, so a missing public price does not throw Search Console offer errors

## Pages

- `/` sales homepage
- `/why` why the phrase works
- `/uses` studio, kits, mobile, booking, lessons, brand
- `/guide` how to read an exact-phrase name
- `/faq` buyer questions
- `/acquire` offer and transfer steps

## Development

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
npm run deploy
```

`wrangler.toml` stays assets-only:

```toml
[assets]
directory = "./dist"
```

## Acquisition

Offers go to **sales@desertrich.com**. The form opens a mailto draft. The site does not store inquiries. Price is on request. Escrow.com is welcome.

## Disclaimer

The domain name is offered for acquisition. The site does not provide waxing services, a website, leads, or a trademark, and it does not guarantee search rankings.
