'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { AlignJustify } from 'lucide-react';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="sticky top-0 z-40 bg-blue-600 shadow-md transition-all duration-500">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            <Link href="/">Logo</Link>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex">
            <ul className="flex items-center justify-center gap-4 text-white">
              <li className="transition-all hover:text-gray-200">
                <Link href="/">Trang chủ</Link>
              </li>
              <li className="transition-all hover:text-gray-200">Quản lý</li>
              <li className="transition-all hover:text-gray-200">
                <Link href="/invoice">Hóa đơn</Link>
              </li>
              <li className="transition-all hover:text-gray-200">
                <Link href="/companysearch">Tình trạng doanh nghiệp</Link>
              </li>
            </ul>
          </nav>

          {/* User Info */}
          <div className="flex items-center gap-2 text-white">
            <p className="hidden sm:block">Hello, User</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex items-center md:hidden">
            <AlignJustify
              className="cursor-pointer text-white"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div>
          <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent className="h-full w-screen">
              <nav className="md:hidden">
                <ul className="flex flex-col space-y-2 py-4">
                  <li className="transition-all hover:text-gray-600">
                    <Link href="/">Trang chủ</Link>
                  </li>
                  <li className="transition-all hover:text-gray-600">
                    Quản lý
                  </li>
                  <li className="transition-all hover:text-gray-600">
                    <Link href="/invoice">Hóa đơn</Link>
                  </li>
                  <li className="transition-all hover:text-gray-600">
                    <Link href="/companysearch">Tình trạng doanh nghiệp</Link>
                  </li>
                </ul>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </header>
    </>
  );
}
