# Changelog

## 2026-10-05

- [FEAT]: Optimization improvements - 2026-10-05
- Rebuilt the sales site: editorial layout, night mode, offer draft, use filters, exit note
- Pages: `/`, `/why`, `/uses`, `/guide`, `/faq`, `/acquire`, `404`
- Titles follow `[page] | waxmy.hair | Premium Domain for Sale | Desert Rich`
- Canonicals, Open Graph, Twitter card, self-hosted fonts, compressed hero
- JSON-LD: Organization, WebSite, WebPage, CollectionPage, Article, FAQPage
- No Product/Offer price markup (price is on request; avoids Search Console price errors)
- `robots.txt` allows crawl and points at the generated sitemap
- Deploy target remains Cloudflare Workers Static Assets on the free plan (worker script removed)
- Inquiries still open email to sales@desertrich.com and are not stored
