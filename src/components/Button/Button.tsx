'use client'
import { Toast } from '@/helpers'
import { IProduct, IUserSession } from '@/interfaces'
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    userData: IUserSession
    product: IProduct
}

const Button: React.FC<ButtonProps> = ({children, userData, product}) => {

    const handleClick = () => {
        if(!userData.token){
            Toast.fire({
                icon: "info",
                title: "You must be logged to add products"
            })
        }else{
            const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
            const productExist = cart.some((item: IProduct) => {
                if(item.id === product.id ) return true;
                return false;
            })

            if(productExist){
                Toast.fire({
                    icon: "warning",
                    title: "This product already exist in your cart"
                })
            } else{
                cart.push(product)
                localStorage.setItem("cart", JSON.stringify(cart))
                Toast.fire({
                    icon: "success",
                    title: "Product added to your cart"
                })
            }
         
        }
    }

  return (
    <button onClick={handleClick}
          className="w-full lg:w-auto mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#40ab95] px-6 py-3 text-white font-medium hover:bg-teal-600 transition disabled:opacity-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {children}
        </button>
  )
}

export default Button
