import { getOrders } from '@/helpers/orders.helper';
import { IOrder, IProduct, IUserSession } from '@/interfaces';
import { cookies } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const OrdersView = async () => {
  const cookieStore = cookies();
  const userData: IUserSession = JSON.parse(cookieStore.get('userData')?.value ?? "{}");
  const orders: IOrder[] = await getOrders(userData.token);
console.log(orders)
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Orders</h1>

      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="bg-customColor rounded-lg shadow-md p-6 mb-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-800">Order #{order.id}</p>
              <p className={`px-4 py-1 rounded-lg ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {order.status.toLocaleUpperCase()}
              </p>

            </div>
            <p className="text-sm text-gray-500 mt-2">Order Date: {new Date(order.date).toLocaleDateString()}</p>

            <div className="mt-4 max-h-40 overflow-y-auto">
              {order.products.map((product: IProduct) => (
                <div key={product.id} className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Image src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                    <p className="font-semibold text-gray-700">{product.name}</p>
                  </div>
                  <p className="text-black-900">${product.price}</p>
                </div>
              ))}
            </div>

          </div>
        ))
      ) : (
        <p className="text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default OrdersView;
