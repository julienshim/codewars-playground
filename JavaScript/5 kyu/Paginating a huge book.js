function pageDigits(pages) {
    const l = BigInt(String(pages).length);
    if (l == 1n) { return pages };
    const a = 10n ** (l - 1n);
    const b = pages - a + 1n;
    const r = b * l
    return r + pageDigits(pages - b);
  }