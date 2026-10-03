// Theme contract: every theme implements this. Grow it only when a second theme needs a new slot.
export interface ThemeTokens {
  name: string;
}

export interface Theme {
  id: ThemeId;
  tokens: ThemeTokens;
}

export const THEME_IDS = ['hybrid'] as const;
export type ThemeId = (typeof THEME_IDS)[number];
export const DEFAULT_THEME_ID: ThemeId = 'hybrid';
export const THEME_STORAGE_KEY = 'theme';
