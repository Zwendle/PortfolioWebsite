import { describe, expect, it } from 'vitest';
import { resolveThemeId } from './index';

describe('resolveThemeId', () => {
  it('returns a known theme id unchanged', () => {
    expect(resolveThemeId('hybrid')).toBe('hybrid');
  });

  it('falls back to the default for unknown, empty, or non-string values', () => {
    expect(resolveThemeId('nop')).toBe('hybrid');
    expect(resolveThemeId(null)).toBe('hybrid');
    expect(resolveThemeId(undefined)).toBe('hybrid');
  });
});
