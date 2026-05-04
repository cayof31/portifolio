export function decodeSlug(input: string): string {
  let value = input;

  // Evita casos de slug codificado mais de uma vez (%25CC%2588).
  for (let i = 0; i < 3; i += 1) {
    try {
      const decoded = decodeURIComponent(value);
      if (decoded === value) break;
      value = decoded;
    } catch {
      break;
    }
  }

  return value;
}

export function normalizeSlug(input: string): string {
  const decoded = decodeSlug(input);

  return decoded
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/["'`’]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}
