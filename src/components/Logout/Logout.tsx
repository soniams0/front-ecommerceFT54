'use client'
import React from 'react'
import Cookies from 'js-cookie'
import { Toast } from '@/helpers';
import { useRouter } from 'next/navigation';
import { IUserSession } from '@/interfaces';




const Logout: React.FC<{setUserSession: (params: IUserSession | null ) => void}> = ({setUserSession}) => {
    const router = useRouter();
    const handleLogout = () => {
        Cookies.remove('userData')
        setUserSession(null)
        Toast.fire({
          icon: "success",
          title: "Logout successfully"
        }); 
        router.push("/");
      };

  return (
    <button onClick={handleLogout} className="inline-flex items-center justify-center rounded-lg bg-[#43C6AC] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:bg-teal-600">
    Logout
    </button>
  )
}

export default Logout
