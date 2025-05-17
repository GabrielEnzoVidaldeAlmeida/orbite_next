"use client";

import { useEffect, useRef, useState } from "react";
import BtnLateral from "../BtnLateral";
import { ArrowLeftFromLineIcon, Menu } from "lucide-react";
import clsx from "clsx";
import RegisterBtn from "../RegisterBtn";

export default function MenuLateral() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.offsetHeight);
    }
  }, [showMenu]);

  return (
    <div>
      <BtnLateral
        onClick={() => setShowMenu((prev) => !prev)}
        icon={Menu}
        className={clsx(
          "mt-5 ml-5 transition-opacity duration-300",
          showMenu ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      />

      {showMenu && (
        <>
          <div style={{ height: menuHeight }} />

          <div
            ref={menuRef}
            className={clsx(
              "dark:bg-orbite-bg-lateral-dark bg-orbite-bg-lateral-light dark:border-orbite-bd-dark",
              "absolute z-10 top-0 min-h-200 h-full w-60",
              "sm:w-90 md:w-100"
            )}
          >
            <div className="flex justify-end p-3 mb-2">
              <BtnLateral
                onClick={() => setShowMenu((prev) => !prev)}
                icon={ArrowLeftFromLineIcon}
              />
            </div>

            <div
              className={clsx(
                "text-orbite-p-text-light dark:text-orbite-pt-text-dark",
                "flex flex-col items-center text-center"
              )}
            >
              <strong className="text-lg sm:text-2xl">Seu Universo</strong>
              <p className="p-3 sm:text-lg">
                Faça login ou cadastre-se para acessar seu universo
              </p>

              <div className="flex gap-4 sm:gap-8 md:gap-12">
                <RegisterBtn
                  linkProps={{
                    href: "/login",
                    className: "w-24 sm:text-lg sm:w-28 sm:h-12",
                  }}
                  text="Entrar"
                />

                <RegisterBtn
                  linkProps={{
                    href: "/register",
                    className: "sm:text-lg sm:w-28 sm:h-12",
                  }}
                  text="Cadastro"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
