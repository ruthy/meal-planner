import { describe, it, expect } from 'vitest';
import { en, he } from '@/i18n';

const enKeys = Object.keys(en);
const heKeys = Object.keys(he);

// Known keys that exist only in HE (not yet added to EN)
const knownHeOnlyKeys: string[] = [];

describe('i18n translation completeness', () => {
  it('EN and HE have the expected key count difference', () => {
    // HE has additional keys not yet in EN
    expect(heKeys.length).toBe(enKeys.length + knownHeOnlyKeys.length);
  });

  it('every key in EN exists in HE', () => {
    const missingInHe = enKeys.filter((key) => !(key in he));
    if (missingInHe.length > 0) {
      console.log('Keys missing in HE:', missingInHe);
    }
    expect(missingInHe).toEqual([]);
  });

  it('every key in HE exists in EN (excluding known HE-only keys)', () => {
    const missingInEn = heKeys.filter((key) => !(key in en) && !knownHeOnlyKeys.includes(key));
    if (missingInEn.length > 0) {
      console.log('Unexpected keys missing in EN:', missingInEn);
    }
    expect(missingInEn).toEqual([]);
  });

  it('lists all keys present in HE but not in EN (for debugging)', () => {
    const heOnlyKeys = heKeys.filter((key) => !(key in en));
    // This test documents the current mismatch for debugging purposes
    expect(heOnlyKeys.sort()).toEqual([...knownHeOnlyKeys].sort());
  });

  it('no empty string values in EN', () => {
    const emptyKeys = enKeys.filter((key) => en[key] === '');
    expect(emptyKeys).toEqual([]);
  });

  it('no empty string values in HE', () => {
    const emptyKeys = heKeys.filter((key) => he[key] === '');
    expect(emptyKeys).toEqual([]);
  });

  it('all values in EN are strings (not undefined/null)', () => {
    for (const key of enKeys) {
      expect(typeof en[key]).toBe('string');
      expect(en[key]).not.toBeNull();
      expect(en[key]).not.toBeUndefined();
    }
  });

  it('all values in HE are strings (not undefined/null)', () => {
    for (const key of heKeys) {
      expect(typeof he[key]).toBe('string');
      expect(he[key]).not.toBeNull();
      expect(he[key]).not.toBeUndefined();
    }
  });
});
