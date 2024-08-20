import React from 'react'

type NavbarProps = {
    children: React.ReactNode
}
function Navbar(props: NavbarProps) {
  return (
    <nav>
        <ul className='flex justify-between items-center'>
           <li>Logo</li>
        </ul>
    </nav>
  )
}

export default Navbar