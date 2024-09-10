import Link from "next/link"

export default function AdminLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <h1>Admin Layout</h1>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </nav>
   
        {children}
      </section>
    )
  }