import isUUID from './isUUID';

describe('isUUID', () => {
  test('supports lowercase version 1 UUID', () => {
    expect(isUUID('a8098c1a-f86e-11da-bd1a-00112444be1e')).toBe(true);
  });

  test('supports uppercase version 1 UUID', () => {
    expect(isUUID('A8098C1A-F86E-11DA-BD1A-00112444BE1E')).toBe(true);
  });

  test('supports lowercase version 2 UUID', () => {
    expect(isUUID('a8098c1a-f86e-21da-bd1a-00112444be1e')).toBe(true);
  });

  test('supports uppercase version 2 UUID', () => {
    expect(isUUID('A8098C1A-F86E-21DA-BD1A-00112444BE1E')).toBe(true);
  });

  test('supports lowercase version 3 UUID', () => {
    expect(isUUID('6fa459ea-ee8a-3ca4-894e-db77e160355e')).toBe(true);
  });

  test('supports uppercase version 3 UUID', () => {
    expect(isUUID('6FA459EA-EE8A-3CA4-894E-DB77E160355E')).toBe(true);
  });

  test('supports lowercase version 4 UUID', () => {
    expect(isUUID('16fd2706-8baf-433b-82eb-8c7fada847da')).toBe(true);
  });

  test('supports uppercase version 4 UUID', () => {
    expect(isUUID('16FD2706-8BAF-433B-82EB-8C7FADA847DA')).toBe(true);
  });

  test('supports lowercase version 5 UUID', () => {
    expect(isUUID('886313e1-3b8a-5372-9b90-0c9aee199e5d')).toBe(true);
  });

  test('supports uppercase version 5 UUID', () => {
    expect(isUUID('886313E1-3B8A-5372-9B90-0C9AEE199E5D')).toBe(true);
  });

  test('supports nil UUID', () => {
    expect(isUUID('00000000-0000-0000-0000-000000000000')).toBe(true);
  });

  test('rejects invalid values', () => {
    expect(isUUID('')).toBe(false);
    expect(isUUID('INVALID')).toBe(false);
    expect(isUUID('abcdefgh-ijkl-mnop-qrst-uvwxyzabcdef')).toBe(false);
    expect(isUUID('886313e1-3b8a-0372-9b90-0c9aee199e5d')).toBe(false);
    expect(isUUID('886313e13b8a53729b900c9aee199e5d')).toBe(false);
  });
});
