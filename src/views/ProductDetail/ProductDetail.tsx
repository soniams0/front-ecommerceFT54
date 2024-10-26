import Button from '@/components/Button/Button';
import { IProduct } from '@/interfaces'
import { cookies } from 'next/headers';
import React from 'react'

const ProductDetail: React.FC<IProduct> = (props) => {

  const {name, image, description, stock, price} = props;
  const cookieStore = cookies();
  const userData = JSON.parse(cookieStore.get('userData')?.value ?? "{}")


  return (

    <section className="w-full min-h-screen bg-white text-gray-900">
    <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="flex justify-center">
        <img
          src={image}
          alt="product image"
          className="h-auto max-h-[500px] w-full max-w-[600px] object-contain rounded-lg shadow-md border border-gray-200"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold text-blue-900">{name}</h1>
        <p className="text-gray-600 text-lg">{description}</p>

        <p className="text-3xl font-semibold text-[#43C6AC]">
          Price: ${price} 
        </p>
        <p className={`text-lg ${stock > 0 ? 'text-[#43C6AC]' : 'text-red-600'}`}>
          {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
        </p>

        

        <Button userData={userData} product={props}>
          Add To Cart 
        </Button>
      </div>
    </div>
  </section>
);
};


export default ProductDetail