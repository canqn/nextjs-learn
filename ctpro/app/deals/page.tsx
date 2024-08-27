import React from 'react';
import PassengerForm from './parts/PassengerForm';

const Deals = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="mb-6 text-2xl font-bold">Booking Form</h1>
        <PassengerForm />
        <div className="mt-6">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Go to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deals;
