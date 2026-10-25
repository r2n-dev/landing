export const a11yStorageKey = "a11y-settings";
const a11yChangeEvent = "a11y-settings-change";

export const textSizes = [100, 115, 130] as const;
export type TextSize = (typeof textSizes)[number];

export interface A11ySettings {
  highContrast: boolean;
  underlineLinks: boolean;
  textSize: TextSize;
  wideSpacing: boolean;
  reduceMotion: boolean;
  readableFont: boolean;
}

export const defaultA11ySettings: A11ySettings = {
  highContrast: false,
  underlineLinks: false,
  textSize: 100,
  wideSpacing: false,
  reduceMotion: false,
  readableFont: false,
};

/** Settings saved by the visitor; anything missing or malformed falls back to the default. */
export function parseA11ySettings(raw: string | null): A11ySettings {
  if (!raw) {
    return defaultA11ySettings;
  }
  try {
    const value = JSON.parse(raw) as Partial<Record<keyof A11ySettings, unknown>>;
    const flag = (key: Exclude<keyof A11ySettings, "textSize">) =>
      typeof value[key] === "boolean" ? (value[key] as boolean) : defaultA11ySettings[key];
    return {
      highContrast: flag("highContrast"),
      underlineLinks: flag("underlineLinks"),
      textSize: textSizes.find((size) => size === value.textSize) ?? defaultA11ySettings.textSize,
      wideSpacing: flag("wideSpacing"),
      reduceMotion: flag("reduceMotion"),
      readableFont: flag("readableFont"),
    };
  } catch {
    return defaultA11ySettings;
  }
}

/** Mirrors the settings as data attributes on <html>; globals.css reads them. */
export function applyA11ySettings(settings: A11ySettings, root: HTMLElement = document.documentElement) {
  const toggle = (name: string, on: boolean, value = "on") =>
    on ? root.setAttribute(name, value) : root.removeAttribute(name);
  toggle("data-a11y-contrast", settings.highContrast, "high");
  toggle("data-a11y-links", settings.underlineLinks, "underline");
  toggle("data-a11y-text", settings.textSize !== 100, String(settings.textSize));
  toggle("data-a11y-spacing", settings.wideSpacing, "wide");
  toggle("data-a11y-motion", settings.reduceMotion, "reduce");
  toggle("data-a11y-font", settings.readableFont, "readable");
}

/** Runs before hydration so saved settings never flash the default look. Self-contained on purpose. */
export const a11yInitScript = `(function(){try{var r=document.documentElement,s=JSON.parse(localStorage.getItem(${JSON.stringify(a11yStorageKey)})||"null");if(!s)return;
if(s.highContrast===true)r.setAttribute("data-a11y-contrast","high");
if(s.underlineLinks===true)r.setAttribute("data-a11y-links","underline");
if(s.textSize===115||s.textSize===130)r.setAttribute("data-a11y-text",String(s.textSize));
if(s.wideSpacing===true)r.setAttribute("data-a11y-spacing","wide");
if(s.reduceMotion===true)r.setAttribute("data-a11y-motion","reduce");
if(s.readableFont===true)r.setAttribute("data-a11y-font","readable");
}catch(e){}})();`;

export function readStoredA11ySettings(): string | null {
  try {
    return window.localStorage.getItem(a11yStorageKey);
  } catch {
    return null;
  }
}

export function saveA11ySettings(settings: A11ySettings) {
  try {
    window.localStorage.setItem(a11yStorageKey, JSON.stringify(settings));
  } catch {
    // Storage can be blocked; the settings still apply for this page view.
  }
  applyA11ySettings(settings);
  window.dispatchEvent(new Event(a11yChangeEvent));
}

export function subscribeA11ySettings(onChange: () => void) {
  window.addEventListener(a11yChangeEvent, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(a11yChangeEvent, onChange);
    window.removeEventListener("storage", onChange);
  };
}
