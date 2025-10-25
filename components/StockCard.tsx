import Link from 'next/link';

interface StockCardProps {
  symbol: string;
  name?: string;
  price?: number;
}

export default function StockCard({ symbol, name, price }: StockCardProps) {
  return (
    <Link
      href={`/stock/${symbol}`}
      className="flex flex-col items-center justify-center border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all p-6 text-center"
    >
      <h2 className="text-xl font-semibold text-gray-900">{symbol}</h2>
      {name && <p className="text-gray-600 text-sm">{name}</p>}
      {price && (
        <p className="text-sm mt-2 font-medium text-green-600">
          ${price.toFixed(2)}
        </p>
      )}
    </Link>
  );
}
