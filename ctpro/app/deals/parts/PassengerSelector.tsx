import React from 'react';

interface PassengerSelectorProps {
  label: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({
  label,
  count,
  setCount,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <span className="mr-2">{label}</span>
      <button
        className="rounded bg-gray-200 px-2 py-1"
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        -
      </button>
      <input
        className="mx-2 w-12 rounded border text-center"
        type="text"
        value={count}
        readOnly
      />
      <button
        className="rounded bg-gray-200 px-2 py-1"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default PassengerSelector;
