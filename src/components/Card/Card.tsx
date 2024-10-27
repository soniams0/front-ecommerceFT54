import { IProduct } from '@/interfaces'
import Image from 'next/image';
import React from 'react'

const Card: React.FC<IProduct> = ({image, name, price}) => {
  return (
    <div className="group my-10 flex w-full max-w-[260px] max-h-[400px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-customColor shadow-md">

  <div className="relative mx-3 mt-3 h-52 flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
    <Image
      className="h-full w-full object-contain p-2" 
      src={image} 
      alt="product image"
    />
    <span className="absolute top-2 left-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">
    </span>
  </div>

  <div className="mt-4 px-5 pb-5 flex-1 flex flex-col justify-between">
    <h5 className="text-lg font-semibold tracking-tight text-blue-900">{name}</h5>

    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-2xl font-bold text-black-500">${price}</span>
        <span className="ml-2 text-sm text-gray-400 line-through">${price + 50}</span>
      </p>
    </div>

    <span className="flex items-center justify-center w-full rounded-md bg-[#4ebaa4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-600 transition focus:outline-none focus:ring-4 focus:ring-blue-300">
    View details
    </span>
  </div>
</div>
  
  );
};

export default Card