// @ts-check
import { defineConfig } from "astro/config";

// Static marketing + docs site for Agent Relay.
// Deployed to GitHub Pages as a project site:
//   https://the-little-ai-company.github.io/agent-relay-site/
// Internal links use import.meta.env.BASE_URL so they respect `base`.
// To move to a custom domain (e.g. agentrelay.dev): set base to "/", update
// `site`, and add a CNAME file in public/.
export default defineConfig({
  site: "https://the-little-ai-company.github.io",
  base: "/agent-relay-site",
});
