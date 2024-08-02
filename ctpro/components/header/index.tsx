import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="fixed w-screen bg-blue-500 px-3 font-normal text-white hover:text-gray-50">
        <div className="container flex h-16 items-center justify-between">
          <div>Logo</div>
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>Quản lý</li>
            <li>Hóa đơn</li>
          </ul>
          <div className="flex items-center gap-2">
            <p>Hello ABCDEF</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </>
  );
}
