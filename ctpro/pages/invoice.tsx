// pages/invoice.js

import React, { useState } from 'react';
import { Table, Input } from 'shadcn'; // Giả sử Shadcn có các component này

const invoices = [
  { id: 1, date: '2023-07-01', amount: '$1000', status: 'Paid' },
  { id: 2, date: '2023-07-02', amount: '$2000', status: 'Pending' },
  { id: 3, date: '2023-07-03', amount: '$3000', status: 'Overdue' }
  // Thêm các hóa đơn khác ở đây
];

const Invoice = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.date.includes(searchTerm) ||
      invoice.amount.includes(searchTerm) ||
      invoice.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Invoice Page</h1>

      <div className='mb-4'>
        <Input
          type='text'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='p-2 border border-gray-300 rounded w-full'
        />
      </div>

      <Table className='min-w-full bg-white border border-gray-200'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>ID</th>
            <th className='py-2 px-4 border-b'>Date</th>
            <th className='py-2 px-4 border-b'>Amount</th>
            <th className='py-2 px-4 border-b'>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className='py-2 px-4 border-b'>{invoice.id}</td>
              <td className='py-2 px-4 border-b'>{invoice.date}</td>
              <td className='py-2 px-4 border-b'>{invoice.amount}</td>
              <td className='py-2 px-4 border-b'>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Invoice;
