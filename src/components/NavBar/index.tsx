"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Search, SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function NavBar() {
  const [searchBar, setSearchBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const linkLogin = "/login";
  const linkRegister = "/register";

  useEffect(() => {
    function checkIsMobile() {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

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
        "border-orbite-bd-light",
        "dark:border-b-orbite-bd-dark dark:text-orbite-pt-text-dark",
        "w-full min-h-20 md:h-30 border-b-1 sm:border-b-2",
        searchBar
          ? "flex justify-center items-center"
          : "flex items-center justify-between"
      )}
    >
      <div
        className={clsx(searchBar ? "w-full px-4" : "flex-1 flex items-center")}
      >
        {!searchBar && (
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="80"
              height="80"
              className="sm:w-30"
              priority
            />
          </Link>
        )}

        {searchBar && (
          <div className="w-full flex items-center gap-3">
            <input
              type="text"
              placeholder="O que você procura?"
              className={clsx(
                "border-orbite-bd-light caret-orbite-caret-light bg-orbite-bg-dark text-orbite-ct-text-light",
                "dark:border-orbite-bd-dark dark:caret-orbite-caret-dark",
                "w-full px-4 py-2 border rounded outline-0"
              )}
            />
            <SearchIcon />
          </div>
        )}
      </div>

      {!searchBar && isMobile && (
        <div className="flex gap-4 mr-4">
          <button onClick={() => setSearchBar(true)}>
            <Search className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
          </button>
          <Link href={linkLogin}>
            <strong className="flex items-center gap-2 text-sm sm:text-xl">
              Entrar
            </strong>
          </Link>
        </div>
      )}

      {!isMobile && (
        <div className="flex items-center mr-8 gap-8">
          <Link href="#">
            <strong className="text-xl hidden lg:block">Categorias</strong>
          </Link>

          <input
            type="text"
            placeholder="O que você procura?"
            className={clsx(
              "border-orbite-bd-light caret-orbite-caret-light bg-orbite-bg-dark text-orbite-ct-text-light",
              "dark:border-orbite-bd-dark dark:caret-orbite-caret-dark",
              "px-2 py-2 border-2 rounded outline-0"
            )}
          />

          <Link href={linkLogin}>Entrar</Link>

          <Link
            href={linkRegister}
            className={clsx(
              "border-orbite-bd-light hover:text-orbite-ct-text-light hover:bg-orbite-caret-light hover:shadow-[0_0_1rem_0_var(--color-orbite-caret-light)]",
              "dark:border-orbite-bd-dark dark:hover:border-orbite-bd-light dark:hover:text-orbite-ct-text-dark dark:hover:bg-orbite-caret-dark dark:hover:shadow-[0_0_1rem_0_var(--color-orbite-caret-dark)]",
              "border-2 rounded-md p-2 transition"
            )}
          >
            Cadastrar-se
          </Link>
        </div>
      )}
    </nav>
  );
}
