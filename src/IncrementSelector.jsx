import { Select } from './ui';

const increments = [1, 0.5, 0.25, 0.1, 5, 10];

export default function IncrementSelector({ value, onChange }) {
  const options = increments.map(inc => ({ label: inc.toString(), id: inc }));
  return (
    <Select
      options={options}
      value={value}
      onChange={(id) => onChange(Number(id))}
    />
  );
}
