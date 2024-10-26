import Link from "next/link";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
 
      <div className="flex">
        <nav className="w-1/5 bg-gray-100 p-4 space-y-4">
          <ul className="space-y-4">
             <h1 className="block text-lg font-semibold hover:text-teal-600">Dashboard</h1>
            <li className="flex items-center">
            <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <Link href="/dashboard" className="block text-lg font-semibold hover:text-teal-600">
                My Profile
              </Link>
            </li>
            <li className="flex items-center">
            <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>              
            <Link href="/dashboard/orders" className="block text-lg font-semibold hover:text-teal-600">
                My Orders
              </Link>
            </li>
          </ul>
        </nav>

        <main className="w-4/5 p-6">
          {children}
        </main>
      </div>
    </>
  );
}

