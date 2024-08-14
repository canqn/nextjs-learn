'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function About() {
  const pathname = usePathname();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant={'destructive'}>Bán ra</Button>
      <Button variant={'secondary'}>Mua vào</Button>
      <ul className="">
        <li className="cursor-pointer border-b border-input px-1 py-2.5 font-semibold">
          "1.hhlo"
        </li>
        <li className="px-1 pt-2.5">
          {/* Remove Link from here and place it only on the links below */}
          <Accordion
            type="multiple"
            className="w-full"
            defaultValue={['accommodation']} // Set defaultValue to open the Accordion
          >
            <AccordionItem
              className="border-stroke flex flex-col border-b"
              value="accommodation"
            >
              <AccordionTrigger>
                <div className="flex w-full items-center gap-2.5 text-sm font-semibold">
                  My booking
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex w-full flex-col gap-2.5 text-sm font-semibold">
                  <Link
                    href="/about"
                    className={`flex gap-2 px-5 py-2.5 ${pathname === '/about' ? 'text-blue-500' : ''}`}
                  >
                    HOTEL
                  </Link>
                  <Link
                    href="/hotels/bookings/flight"
                    className={`flex gap-2 px-5 py-2.5 ${pathname === '/hotels/bookings/flight' ? 'text-blue-500' : ''}`}
                  >
                    FLIGHT
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </li>
        <li className="cursor-pointer px-1 py-2.5 font-semibold">hello</li>
      </ul>
    </main>
  );
}
