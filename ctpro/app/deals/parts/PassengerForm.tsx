'use client';
import React, { useEffect, useState } from 'react';
import PassengerSelector from './PassengerSelector';
import PassengerInfo from './PassengerInfo';

const ADULT_COST = 2025000; // Example cost per adult
const CHILD_COST = 1512500; // Example cost per child
const INFANT_COST = 803000; // Example cost per infant
const PRIVATE_BED_COST = 200000; // Cost for a private bed
const PassengerForm: React.FC = () => {
  const [adultsCount, setAdultsCount] = useState<number>(1);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [infantsCount, setInfantsCount] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    calculateTotalCost();
  }, [adultsCount, childrenCount, infantsCount]);

  const calculateTotalCost = () => {
    const adultsCost = adultsCount * ADULT_COST;
    const childrenCost = childrenCount * CHILD_COST;
    const infantsCost = infantsCount * INFANT_COST;

    const bedCost = adultsCount > 0 ? adultsCount * PRIVATE_BED_COST : 0;

    const total = adultsCost + childrenCost + infantsCost + bedCost;
    setTotalCost(total);
  };

  const generatePassengerForms = (): JSX.Element[] => {
    let forms: JSX.Element[] = [];

    for (let i = 0; i < adultsCount; i++) {
      forms.push(<PassengerInfo key={`adult-${i}`} type="Adult" index={i} />);
    }

    for (let i = 0; i < childrenCount; i++) {
      forms.push(<PassengerInfo key={`child-${i}`} type="Child" index={i} />);
    }

    for (let i = 0; i < infantsCount; i++) {
      forms.push(<PassengerInfo key={`infant-${i}`} type="Infant" index={i} />);
    }

    return forms;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="passenger-selection mb-6">
        <PassengerSelector
          label="Adults"
          count={adultsCount}
          setCount={setAdultsCount}
        />
        <PassengerSelector
          label="Children"
          count={childrenCount}
          setCount={setChildrenCount}
        />
        <PassengerSelector
          label="Infants"
          count={infantsCount}
          setCount={setInfantsCount}
        />
      </div>

      <div className="passenger-forms">{generatePassengerForms()}</div>

      <div className="total-cost mt-6">
        <h3 className="text-lg font-bold">
          Total Cost: {totalCost.toLocaleString('en-US')} VND
        </h3>
      </div>
    </div>
  );
};

export default PassengerForm;
