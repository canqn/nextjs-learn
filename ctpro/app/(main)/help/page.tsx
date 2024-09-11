"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function HelpPage() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Passenger Data: ", data);
  };

  const increment = (setter, count) => setter(count + 1);
  const decrement = (setter, count, min) => {
    if (count > min) setter(count - 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Passengers</h2>

      {/* Passenger Counter */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex items-center justify-between">
          <label className="font-medium">Adults</label>
          <div className="flex items-center">
            <button
              onClick={() => decrement(setAdults, adults, 1)} // Ensure adults cannot go below 1
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </button>
            <span className="mx-4">{adults}</span>
            <button
              onClick={() => increment(setAdults, adults)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label className="font-medium">Children</Label>
          <div className="flex items-center">
            <Button
              onClick={() => decrement(setChildren, children, 0)} // Children can be 0
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </Button>
            <span className="mx-4">{children}</span>
            <Button
              onClick={() => increment(setChildren, children)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="font-medium">Infants</label>
          <div className="flex items-center">
            <Button
              onClick={() => decrement(setInfants, infants, 0)} // Infants can be 0
              className="px-2 py-1 bg-gray-200 rounded"
            >
              -
            </Button>
            <span className="mx-4">{infants}</span>
            <button
              onClick={() => increment(setInfants, infants)}
              className="px-2 py-1 bg-gray-200 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Passenger Information Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Passenger Information</h3>

        {[...Array(adults)].map((_, index) => (
          <div key={`adult-${index}`} className="p-4 border rounded-lg">
            <h4 className="text-lg font-medium mb-2">
              Passenger {index + 1} (Adult)
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                {...register(`adultFirstName${index}`)}
                placeholder="First name"
                required
                className="p-2 border rounded w-full"
              />
              <input
                {...register(`adultLastName${index}`)}
                placeholder="Last name"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Gender:</label>
                <select
                  {...register(`adultGender${index}`)}
                  required
                  className="p-2 border rounded w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  {...register(`adultDOB${index}`)}
                  type="date"
                  required
                  className="p-2 border rounded w-full"
                />
              </div>
            </div>
          </div>
        ))}

        {[...Array(children)].map((_, index) => (
          <div key={`child-${index}`} className="p-4 border rounded-lg">
            <h4 className="text-lg font-medium mb-2">
              Passenger {index + 1} (Child)
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                {...register(`childFirstName${index}`)}
                placeholder="First name"
                required
                className="p-2 border rounded w-full"
              />
              <input
                {...register(`childLastName${index}`)}
                placeholder="Last name"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Gender:</label>
                <select
                  {...register(`childGender${index}`)}
                  required
                  className="p-2 border rounded w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  {...register(`childDOB${index}`)}
                  type="date"
                  required
                  className="p-2 border rounded w-full"
                />
              </div>
            </div>
          </div>
        ))}

        {[...Array(infants)].map((_, index) => (
          <div key={`infant-${index}`} className="p-4 border rounded-lg">
            <h4 className="text-lg font-medium mb-2">
              Passenger {index + 1} (Infant)
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                {...register(`infantFirstName${index}`)}
                placeholder="First name"
                required
                className="p-2 border rounded w-full"
              />
              <input
                {...register(`infantLastName${index}`)}
                placeholder="Last name"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Gender:</label>
                <select
                  {...register(`infantGender${index}`)}
                  required
                  className="p-2 border rounded w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label>Date of Birth:</label>
                <input
                  {...register(`infantDOB${index}`)}
                  type="date"
                  required
                  className="p-2 border rounded w-full"
                />
              </div>
            </div>
          </div>
        ))}

        <Button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
