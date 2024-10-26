import React from 'react';
import Card from '@/components/Card/Card';
import { getProductsDB } from '@/helpers/products.helper';
import Link from 'next/link';

const CardList = async () => {
  const products = await getProductsDB();
  return (
    <div className="grid w-full gap-6 p-4 sm:p-6 lg:p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products &&
        products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="flex justify-center">
            <Card {...product} />
          </Link>
        ))}
    </div>
  );
};

export default CardList;
