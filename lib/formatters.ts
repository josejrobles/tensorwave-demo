export function formatMarketCap(value: number | string): string {
  const num = typeof value === 'string' ? Number(value) : value;

  if (isNaN(num)) return 'N/A';

  if (num >= 1_000_000_000_000) {
    return `$${(num / 1_000_000_000_000).toFixed(2)}T`;
  } else if (num >= 1_000_000_000) {
    return `$${(num / 1_000_000_000).toFixed(2)}B`;
  } else if (num >= 1_000_000) {
    return `$${(num / 1_000_000).toFixed(2)}M`;
  } else {
    return `$${num.toLocaleString()}`;
  }
}
