import React from 'react'

function Hotel() {
  return (
    <div className='mx-auto'>
       <div className=' bg-slate-300 p-4 w-64'>
          <h1>Action</h1>
          <div className='flex gap-1 items-center text-white text-sm'>
            <p className='px-3 py-1 rounded-md bg-blue-500  hover:bg-blue-600'>Xem</p>
            <p className='px-3 py-1 rounded-md bg-green-500 hover:bg-green-600'>Edit</p>
            <p className='px-3 py-1 rounded-md bg-red-500 hover:bg-red-600'>Remove</p>
          </div>
          <div className='flex gap-1 items-center text-sm f'>
            <p className='px-2 text-sm font-medium rounded-sm bg-blue-300 text-blue-500'>ACTIVE</p>
            <p className='px-2 rounded-sm bg-red-300 text-red-500'>BLOCK</p>
            <p className='px-3 py-1 rounded-md bg-red-500 hover:bg-red-600'>Remove</p>
          </div>
       </div>
    </div>
  )
}

export default Hotel