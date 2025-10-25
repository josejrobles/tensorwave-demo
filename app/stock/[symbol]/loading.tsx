import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <LoadingSpinner />
      <p className="text-gray-600 mt-4">Fetching stock data...</p>
    </div>
  );
}
