import { DEFAULT_THEME_ID, THEME_IDS, type Theme, type ThemeId } from './types';

// Registry of lazy loaders so only the active theme's code is fetched.
export const themeLoaders: Record<ThemeId, () => Promise<{ default: Theme }>> = {
  hybrid: () => import('./hybrid'),
};

// Validates a raw (e.g. localStorage) value, falling back to the default theme.
export function resolveThemeId(value: unknown): ThemeId {
  return THEME_IDS.includes(value as ThemeId) ? (value as ThemeId) : DEFAULT_THEME_ID;
}
