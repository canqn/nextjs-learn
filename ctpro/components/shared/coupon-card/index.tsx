import React from 'react'

export default function Coupon() {

  return (
    <section 
    className="card flex w-[425px]  items-center bg-slate-500 rounded-lg border  border-black h-[105px]" 
    style={{
        WebkitMaskImage: 'radial-gradient(circle at 130px 14px, transparent 14px, red 14.5px), linear-gradient(transparent 25%, red 0, red 75%, transparent 0)',
        WebkitMaskSize: '100%, 4px 12px',
        WebkitMaskRepeat: 'repeat, repeat-y',
        WebkitMaskPosition: '0 -4px, 130px',
        WebkitMaskComposite: 'source-out',
        maskComposite: 'subtract',
      }}>
    <div className="card-left w-[88px] text-center  text-2xl">Title coupup</div>
    <div className="card-right px-4 py-3 flex flex-1 flex-col">
        <p className="card-info m-0 text-sm leading-5 text-gray-900">desc Coupon</p>
        <strong className="card-time text-xs leading-4 font-normal text-red-600 mt-1">仅剩 04:48:49</strong>
    </div>
</section>

  )
}
