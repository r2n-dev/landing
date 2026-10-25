// Runs axe-core against the running production server (npm start) in light and dark schemes
// at desktop and mobile widths. Fails on serious or critical violations.
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const baseUrl = process.env.A11Y_BASE_URL ?? "http://127.0.0.1:3000";
const paths = ["/", "/resume-en"];
const schemes = ["light", "dark"];
const viewports = [
  { width: 1280, height: 900 },
  { width: 375, height: 800 },
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
let failures = 0;

for (const path of paths) {
  for (const colorScheme of schemes) {
    for (const viewport of viewports) {
      const context = await browser.newContext({ colorScheme, viewport });
      const page = await context.newPage();
      await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      const blocking = violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
      const label = `${path} ${colorScheme} ${viewport.width}px`;
      if (blocking.length === 0) {
        console.log(`ok   ${label}`);
      }
      for (const violation of blocking) {
        failures += 1;
        console.error(`FAIL ${label}: ${violation.id} - ${violation.help}`);
        for (const node of violation.nodes.slice(0, 3)) {
          console.error(`       ${node.target.join(" ")}`);
        }
      }
      await context.close();
    }
  }
}

await browser.close();
process.exit(failures === 0 ? 0 : 1);
