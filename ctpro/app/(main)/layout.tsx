import Header from '@/components/header';
import Link from 'next/link';

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <main className="container mt-6">{children}</main>
    </>
  );
}
