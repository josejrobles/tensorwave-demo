// app/stock/[symbol]/RecentPrices.tsx
import Table from '@/components/Table';

interface PriceEntry {
  date: string;
  close: number;
  volume: number;
  change?: number; // percent change from previous day
}

interface RecentPricesProps {
  prices: PriceEntry[];
}

export default function RecentPrices({ prices }: RecentPricesProps) {
  // Sort newest → oldest (AlphaVantage sometimes reverses this)
  const sorted = [...prices].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate % change between each day
  const withChange = sorted.map((day, i) => {
    if (i === sorted.length - 1) return { ...day, change: null }; // no next day
    const nextDay = sorted[i + 1];
    const change = ((day.close - nextDay.close) / nextDay.close) * 100;
    return { ...day, change };
  });

  const headers = ['Date', 'Close', 'Volume', '% Change'];
  const data = withChange.map((d) => [
    d.date,
    `$${d.close.toFixed(2)}`,
    d.volume.toLocaleString(),
    d.change === null
      ? '—'
      : `${d.change > 0 ? '+' : ''}${d.change.toFixed(2)}%`,
  ]);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">Recent Daily Prices</h2>
      <Table headers={headers} data={data} />
    </section>
  );
}
