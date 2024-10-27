import Link from 'next/link';
import React from "react";
import logo1 from '@/assets/logo1.png';
import NavbarButtons from '../NavbarButtons';
import categoriesToPreload from '@/helpers/categories';
import SearchBar from '../SearchBar/SearchBar';
import Image from 'next/image';

const Navbar = () => {

    return (
      <header className="w-full bg-[#162340] py-4 shadow-lg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">

            <div className="flex shrink-0">
              <Link aria-current="page" className="flex items-center" href="/">
                <Image
                  className="h-7 w-auto"
                  src={logo1.src}
                  alt="Website Logo"
                />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:gap-8">
              <div>
                <SearchBar />
              </div>
            {
              categoriesToPreload && categoriesToPreload.map((category) => {
                return(
                  <Link className="text-white text-sm font-medium transition-colors duration-200 hover:text-[#43C6AC]" key={category.id} href={`/products/${category.id}`}>{category.name}</Link>
                )
              })
            }
  
          </div>
  
            <NavbarButtons  />
            
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;