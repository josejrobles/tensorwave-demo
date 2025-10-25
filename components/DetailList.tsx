interface DetailItem {
  label: string;
  value: string | number | null | undefined;
}

interface DetailListProps {
  title: string;
  items: DetailItem[];
}

export default function DetailList({ title, items }: DetailListProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong>{' '}
            {item.value && item.value !== 'N/A' ? item.value : 'N/A'}
          </li>
        ))}
      </ul>
    </section>
  );
}
