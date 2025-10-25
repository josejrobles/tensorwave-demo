'use client';
import DetailList from '@/components/DetailList';
import { useState } from 'react';

interface CompanyOverviewProps {
  overview: {
    Name: string;
    Description: string;
    AssetType?: string;
    Exchange?: string;
    Sector?: string;
    Industry?: string;
    MarketCapitalization?: string;
  };
}

export default function CompanyOverview({ overview }: CompanyOverviewProps) {
  const [expanded, setExpanded] = useState(false);

  const items = [
    { label: 'Asset Type', value: overview.AssetType },
    { label: 'Exchange', value: overview.Exchange },
    { label: 'Sector', value: overview.Sector },
    { label: 'Industry', value: overview.Industry },
    { label: 'Market Cap', value: overview.MarketCapitalization },
  ];

  return (
    <section className="space-y-4">
      <DetailList title="Company Overview" items={items} />

      {overview.Description && (
        <div>
          <h3 className="text-lg font-semibold mb-1">Description</h3>
          <p
            className={`text-sm text-gray-700 leading-relaxed ${
              !expanded ? 'line-clamp-3' : ''
            }`}
          >
            {overview.Description}
          </p>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="mt-2 text-blue-600 text-sm font-medium hover:underline hover:text-blue-700 focus:outline-none cursor-pointer transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        </div>
      )}
    </section>
  );
}
