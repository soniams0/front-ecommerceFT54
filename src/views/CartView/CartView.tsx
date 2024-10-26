'use client'
import CartProduct from '@/components/CartProduct/CartProduct';
import { Toast } from '@/helpers';
import { createOrder } from '@/helpers/orders.helper';
import { IProduct, IUserSession } from '@/interfaces';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CartView: React.FC<{ userData: IUserSession }> = ({ userData }) => {
  const router = useRouter();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalCart = 0;
      storedCart?.forEach((item: IProduct) => {
        totalCart += item.price;
      });
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    setTotal(updatedCart.reduce((acc, item) => acc + item.price, 0));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = async () => {
    const idProducts = cart?.map((product) => product.id);
    await createOrder(idProducts, userData.token);
    Toast.fire({
      icon: "success",
      title: "Buy Successfully",
    });
    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", "[]");
    router.refresh();
    router.push("/dashboard/orders");
    router.refresh();
  };

  return (
    <section className="w-full bg-customColor py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Shopping Cart</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl overflow-auto max-h-[360px]">
            <div className="space-y-6">
              {/* PRODUCT RENDERING */}
              {cart.length ? (
                cart.map((product: IProduct) => (
                  <CartProduct key={product.id} {...product} onRemove={handleRemoveProduct} />
                ))
              ) : (
                <p>You don’t have any products in your cart yet</p>
              )}
            </div>
          </div>
        
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-customColor p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">${total}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-gray-900">-$0</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white underline">FREE</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">$0</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">${total}</dd>
            </dl>
          </div>

          <button onClick={handleCheckout} className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium ring-2 ring-black text-black hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Proceed to Checkout
          </button>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
            <Link href="/" title="" className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">
              Continue Shopping
              <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </Link>
          </div>
        </div>

   
      </div>
    </div>
  </div>
</section>  
)
}

export default CartView