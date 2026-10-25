import { useCallback, useMemo, useSyncExternalStore } from "react";
import {
  defaultA11ySettings,
  parseA11ySettings,
  readStoredA11ySettings,
  saveA11ySettings,
  subscribeA11ySettings,
  type A11ySettings,
} from "./a11y-settings";

export function useA11ySettings() {
  // The raw string is the snapshot so React compares a primitive, not a fresh object.
  const raw = useSyncExternalStore(subscribeA11ySettings, readStoredA11ySettings, () => null);
  const settings = useMemo(() => parseA11ySettings(raw), [raw]);

  const update = useCallback(
    (patch: Partial<A11ySettings>) => saveA11ySettings({ ...parseA11ySettings(readStoredA11ySettings()), ...patch }),
    [],
  );
  const reset = useCallback(() => saveA11ySettings(defaultA11ySettings), []);

  return { settings, update, reset } as const;
}
