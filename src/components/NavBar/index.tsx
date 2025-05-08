"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Search, SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function NavBar() {
  const [searchBar, setSearchBar] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSearchBar(false);
      }
    }

    if (searchBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBar]);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "w-full min-h-20 md:h-32 border-b-1 sm:border-b-2",
        searchBar
          ? "flex justify-center items-center"
          : "flex items-center justify-between",
        "border-orbite-bd-light",
        "dark:border-b-orbite-bd-dark dark:text-orbite-pt-text-dark"
      )}
    >
      <div className={clsx(searchBar ? "w-full max-w-xl px-4" : "flex-1")}>
        {!searchBar && (
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="80"
              height="80"
              className="sm:w-32"
              priority
            />
          </Link>
        )}

        {searchBar && (
          <div className="w-full flex items-center gap-5">
            <input
              type="text"
              placeholder="O que você procura?"
              className="w-full px-4 py-2 border rounded"
            />
            <SearchIcon />
          </div>
        )}
      </div>

      {!searchBar && (
        <div className="flex gap-4 mr-4">
          <button onClick={() => setSearchBar(true)}>
            <Search className="w-5 h-5 cursor-pointer" />
          </button>
          <strong className="flex items-center gap-2 text-sm">Entrar</strong>
        </div>
      )}
    </nav>

    // return (
    //   <nav className='flex items-center justify-between w-full min-h-20 md:h-32 border-b-2 border-orbite-bd-light  dark:border-b-orbite-bd-dark dark:text-orbite-pt-text-dark'>

    //     {!searchBar && (
    //       <div className="w-19 sm:w-32 md:w-32">
    //         <Image
    //           src={logo}
    //           alt="Logo"
    //           className="w-full h-auto"
    //           priority
    //         />
    //       </div>
    //     )}

    //     <div className='flex justify-center items-center gap-8 mr-8'>
    //       <strong className='text-xl hidden md:block'>Categorias</strong>

    //       <button onClick={handleSearchBar}>
    //         <Search className='block sm:hidden' />
    //       </button>

    //       {!searchBar && (
    //         <input
    //         placeholder="O que você procura?"
    //         className={clsx(
    //           'block sm:hidden w-full',
    //           'p-2 border-2 rounded-sm outline-none',
    //           'border-orbite-bd-light caret-orbite-caret-light placeholder-orbite-ct-text-light bg-orbite-bg-dark text-orbite-ct-text-light',
    //           'dark:border-orbite-bd-dark dark:caret-orbite-caret-dark dark:placeholder-orbite-pt-text-dark',
    //           'animate-fade-in')}
    //       />
    //       )}

    //       <input
    //         placeholder="O que você procura?"
    //         className={clsx(
    //           'hidden md:block',
    //           'p-2 border-2 rounded-sm outline-none',
    //           'border-orbite-bd-light caret-orbite-caret-light placeholder-orbite-ct-text-light bg-orbite-bg-dark text-orbite-ct-text-light',
    //           'dark:border-orbite-bd-dark dark:caret-orbite-caret-dark dark:placeholder-orbite-pt-text-dark ')}
    //       />

    //       {searchBar && <Link href="/" >Entrar</Link>}
    //       <Link
    //         href="/"
    //         className={clsx(
    //           'hidden md:block',
    //           'border rounded-md p-2 transition',
    //           'border-orbite-bd-light hover:text-orbite-ct-text-light hover:bg-orbite-caret-light hover:shadow-[0_0_1rem_0_var(--color-orbite-caret-light)]',
    //           'dark:border-orbite-bd-dark dark:hover:border-orbite-bd-light dark:hover:text-orbite-ct-text-dark dark:hover:bg-orbite-caret-dark dark:hover:shadow-[0_0_1rem_0_var(--color-orbite-caret-dark)]'
    //         )}
    //       >
    //         Cadastrar-se
    //       </Link>
    //     </div>
    //   </nav>
    // )
  );
}
