'use client';
import React, { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function InvoicePage() {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [invoiceType, setInvoiceType] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý dữ liệu submit
    console.log({
      startDate,
      endDate,
      invoiceType,
      username,
      password,
    });
    // Thực hiện submit, ví dụ gọi API hoặc xử lý tiếp
  };

  return (
    <div>
      <h1>Tra cứu hóa đơn điện tử</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          {/* Start Date Picker */}
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[160px] justify-start text-left font-normal',
                    !startDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? (
                    format(startDate, 'dd/MM/yyyy')
                  ) : (
                    <span>Ngày bắt đầu</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  defaultMonth={new Date()}
                  onSelect={setStartDate}
                  disabled={(startDate) =>
                    startDate > new Date() || startDate < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* End Date Picker */}
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-[160px] justify-start text-left font-normal',
                    !endDate && 'text-muted-foreground'
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? (
                    format(endDate, 'dd/MM/yyyy')
                  ) : (
                    <span>Ngày kết thúc</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  defaultMonth={new Date()}
                  onSelect={setEndDate}
                  disabled={(endDate) =>
                    endDate > new Date() || endDate < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex gap-2">
          {/* Invoice Type */}
          <div className="flex flex-col">
            <label htmlFor="invoiceType">Loại hóa đơn</label>
            <select
              id="invoiceType"
              value={invoiceType}
              onChange={(e) => setInvoiceType(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
              required
            >
              <option value="" disabled>
                Chọn loại hóa đơn
              </option>
              <option value="vat">Bán ra</option>
              <option value="service">Mua vào</option>
            </select>
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="mt-4 w-full">
          Tra cứu
        </Button>
      </form>
    </div>
  );
}
