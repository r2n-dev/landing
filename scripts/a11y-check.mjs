// Runs axe-core against the running production server (npm start) in light and dark schemes
// at desktop and mobile widths. Fails on serious or critical violations.
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const baseUrl = process.env.A11Y_BASE_URL ?? "http://127.0.0.1:3000";
const paths = (process.env.A11Y_PATHS ?? "/,/resume-en,/resume-es").split(",");
const schemes = ["light", "dark"];
const allSettings = { highContrast: true, underlineLinks: true, textSize: 130, wideSpacing: true, reduceMotion: true, readableFont: true };
const variants = [
  { name: "default", settings: null },
  { name: "all settings on", settings: allSettings },
];
const viewports = [
  { width: 1280, height: 900 },
  { width: 375, height: 800 },
];

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
let failures = 0;

for (const path of paths) {
  for (const colorScheme of schemes) {
    for (const viewport of viewports) {
      for (const variant of variants) {
        const context = await browser.newContext({ colorScheme, viewport });
        const page = await context.newPage();
        if (variant.settings) {
          await page.addInitScript((settings) => window.localStorage.setItem("a11y-settings", JSON.stringify(settings)), variant.settings);
        }
        await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
        // Colors animate when the dark class is applied; measure the settled state.
        await page.addStyleTag({ content: "*, ::before, ::after { transition: none !important; animation: none !important; }" });
        const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
        const blocking = violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
        const label = `${path} ${colorScheme} ${viewport.width}px (${variant.name})`;
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
}

await browser.close();
process.exit(failures === 0 ? 0 : 1);
