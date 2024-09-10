'use client';
import { Calendar } from '@/components/ui/calendar';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CTPro - Trang hóa đơn điện tử</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <DateRangePicker
        onUpdate={(values) => console.log(values)}
        initialDateFrom="2023-01-01"
        initialDateTo="2023-12-31"
        align="start"
        locale="en-GB"
        showCompare={false}
      />
    </div>
  );
}
