import React from 'react';

interface PassengerInfoProps {
  type: 'Adult' | 'Child' | 'Infant';
  index: number;
}

const PassengerInfo: React.FC<PassengerInfoProps> = ({ type, index }) => {
  return (
    <div className="mb-4 rounded border p-4">
      <h3 className="mb-2">{`Passenger ${index + 1}: ${type}`}</h3>
      <div className="grid grid-cols-2 gap-4">
        <input
          className="rounded border p-2"
          placeholder="First Name"
          name={`firstName-${type}-${index}`}
        />
        <input
          className="rounded border p-2"
          placeholder="Last Name"
          name={`lastName-${type}-${index}`}
        />
        <input
          className="rounded border p-2"
          type="date"
          placeholder="Date of Birth"
          name={`dob-${type}-${index}`}
        />
        <select className="rounded border p-2" name={`gender-${type}-${index}`}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {type === 'Adult' && (
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              name={`privateBed-${index}`}
            />
            Private Bed (+200,000 VND)
          </label>
        )}
      </div>
    </div>
  );
};

export default PassengerInfo;
