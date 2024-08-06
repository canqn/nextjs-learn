import React from 'react';

export default function Coupon() {
  return (
    <section
      className="card flex h-[105px] w-[425px] items-center rounded-lg border border-black bg-slate-500"
      style={{
        WebkitMaskImage:
          'radial-gradient(circle at 130px 14px, transparent 14px, red 14.5px), linear-gradient(transparent 25%, red 0, red 75%, transparent 0)',
        WebkitMaskSize: '100%, 4px 12px',
        WebkitMaskRepeat: 'repeat, repeat-y',
        WebkitMaskPosition: '0 -4px, 130px',
        WebkitMaskComposite: 'source-out',
        maskComposite: 'subtract',
      }}
    >
      <div className="card-left w-[88px] text-center text-2xl">
        Title coupup
      </div>
      <div className="card-right flex flex-1 flex-col px-4 py-3">
        <p className="card-info m-0 text-sm leading-5 text-gray-900">
          desc Coupon
        </p>
        <strong className="card-time mt-1 text-xs font-normal leading-4 text-red-600">
          仅剩 04:48:49
        </strong>
      </div>
    </section>
  );
}
