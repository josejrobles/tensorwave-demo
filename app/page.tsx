import StockCard from '@/components/StockCard';

const STOCK_SYMBOLS = [
  'AAPL',
  'MSFT',
  'GOOGL',
  'AMZN',
  'META',
  'TSLA',
  'NVDA',
  'NFLX',
  'INTC',
  'AMD',
  'ADBE',
  'ORCL',
  'CRM',
  'PYPL',
  'IBM',
  'CSCO',
  'WMT',
  'JPM',
  'QCOM',
  'AMAT',
].sort();

export default function HomePage() {
  return (
    <section className="flex flex-col gap-8 py-10">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          TensorWave Demo Stock Viewer
        </h1>
        <p className="text-gray-600">
          Click a ticker below to view details and historical performance.
        </p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {STOCK_SYMBOLS.map((symbol) => (
          <StockCard key={symbol} symbol={symbol} />
        ))}
      </div>
    </section>
  );
}
