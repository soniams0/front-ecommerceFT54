import { IProduct } from '@/interfaces'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


interface CartProductProps extends IProduct {
  onRemove: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({ id, image, name, price, onRemove }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-customColor p-4 shadow-sm md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link href="#" className="shrink-0 md:order-1">
          <img className="h-20 w-20" src={image} alt={name} />
        </Link>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 dark:text-white">${price}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">
            {name}
          </Link>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onRemove(id)}
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L17.94 6M18 18L6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct
