import { notFound } from 'next/navigation';
import { getCompanyOverview, getDailyPrices } from '@/lib/alphaVantage';
import RecentPrices from './RecentPrices';
import CompanyOverview from './CompanyOverview';
import BackButton from '@/components/BackButton';

interface StockPageProps {
  params: { symbol: string };
}

export default async function StockPage({ params }: StockPageProps) {
  const { symbol } = await params;

  // Fetch data in parallel
  const [overview, prices] = await Promise.all([
    getCompanyOverview(symbol),
    getDailyPrices(symbol),
  ]);

  // Basic validation (Alpha Vantage returns "Note" or empty objects when rate limited)
  if (!overview?.Symbol || !prices?.['Time Series (Daily)']) {
    return notFound();
  }

  const timeSeries = prices['Time Series (Daily)'];
  const recentDays = Object.keys(timeSeries)
    .slice(0, 10)
    .map((date) => ({
      date,
      close: parseFloat(timeSeries[date]['4. close']),
      volume: parseInt(timeSeries[date]['5. volume'], 10),
    }));

  return (
    <section className="py-10 space-y-6">
      <header>
        <BackButton />
        <h1 className="text-3xl font-bold mb-2">{overview.Name}</h1>
        <p className="text-gray-600">{overview.Symbol}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <CompanyOverview overview={overview} />
        </div>
        <div>
          <RecentPrices prices={recentDays} />
        </div>
      </div>
    </section>
  );
}
