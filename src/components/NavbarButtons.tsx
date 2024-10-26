'use client'
import { IUserSession } from '@/interfaces';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import Logout from './Logout/Logout';


const NavbarButtons: React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession | null >(null);
  const pathname = usePathname();

  useEffect(() => {
      const storedUser = JSON.parse(Cookies.get("userData") ?? '{}')
      setUserSession(storedUser);
    
  }, [pathname]);

  

  return (
    <div className="flex items-center gap-3">
      {
        !userSession?.token ? (
          <>
            <Link
              href="/register"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-[#191645] shadow-md ring-1 ring-gray-300 hover:bg-white"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-[#43C6AC] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:bg-teal-600"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-lg bg-[#43C6AC] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:bg-teal-600"
            >
              Cart
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-[#43C6AC] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-150 hover:bg-teal-600"
            >
              Profile
            </Link>
            <Logout setUserSession={setUserSession}/>
          
          </>
        )
      }
    </div>
  );
};

export default NavbarButtons;
