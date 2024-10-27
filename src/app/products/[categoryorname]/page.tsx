'use client'
import Card from '@/components/Card/Card';
import { getProductsByCategoryOrName } from '@/helpers/products.helper';
import { IProduct } from '@/interfaces';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Products: React.FC<{ params: { categoryorname: string } }> = ({ params }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (params.categoryorname) {
                const fetchedProducts = await getProductsByCategoryOrName(params.categoryorname);
                setProducts(fetchedProducts);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [params.categoryorname]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="flex flex-wrap items-center gap-4 p-4 justify-center ">
            {products.length ? (
                products.map((product: IProduct) => (
                    <Link key={product.id} href={`/product/${product.id}`}>
                        <Card {...product} />
                    </Link>
                ))
            ) : (
                <div>Products not found</div>
            )}
        </div>
    );
};

export default Products;
