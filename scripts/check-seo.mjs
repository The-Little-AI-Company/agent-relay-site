import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const canonicalBase = "https://the-little-ai-company.github.io/agent-relay-site";
const routes = [
  "/",
  "/method/",
  "/method/relay-loop-audit/",
  "/method/prompt-craft/",
  "/method/thirty-minute-relay/",
];

const routeToUrl = (route) =>
  route === "/" ? `${canonicalBase}/` : `${canonicalBase}${route}`;

const routeToDistFile = (route) =>
  new URL(route === "/" ? "index.html" : `${route.slice(1)}index.html`, dist);

const readDistFile = async (path) => readFile(new URL(path, dist), "utf8");

const [sitemap, robots, llms] = await Promise.all([
  readDistFile("sitemap.xml"),
  readDistFile("robots.txt"),
  readDistFile("llms.txt"),
]);

const expectedUrls = routes.map(routeToUrl);
const robotsLines = robots.trim().split(/\r?\n/);
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);

assert.deepEqual(
  sitemapUrls,
  expectedUrls,
  "sitemap.xml must contain every canonical public route in order",
);

assert.equal(
  sitemap.includes("https://the-little-ai-company.github.io/method/"),
  false,
  "sitemap.xml must include the GitHub Pages base path",
);

assert(robotsLines.includes("User-agent: *"));
assert(robotsLines.includes("Allow: /"));
assert(
  robotsLines.includes(`Sitemap: ${canonicalBase}/sitemap.xml`),
  "robots.txt must point at the canonical sitemap",
);

for (const url of expectedUrls) {
  assert(
    llms.includes(url),
    `llms.txt must reference canonical URL: ${url}`,
  );
}

assert.match(
  llms,
  /https:\/\/github\.com\/The-Little-AI-Company\/open-work-relay/,
);

const pageHtml = await Promise.all(
  routes.map(async (route) => ({
    route,
    html: await readFile(routeToDistFile(route), "utf8"),
  })),
);

for (const { route, html } of pageHtml) {
  const canonicalUrl = routeToUrl(route);
  assert(
    html.includes(`rel="canonical" href="${canonicalUrl}"`),
    `page must include canonical URL: ${canonicalUrl}`,
  );
  assert(
    html.includes(`property="og:url" content="${canonicalUrl}"`),
    `page must include og:url: ${canonicalUrl}`,
  );
  assert(
    html.includes('href="/agent-relay-site/favicon.svg"'),
    "favicon link must include the GitHub Pages base path",
  );
}

console.log(`SEO files verified for ${expectedUrls.length} public routes.`);
