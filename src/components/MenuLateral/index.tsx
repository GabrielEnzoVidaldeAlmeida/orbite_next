"use client";

import { useState } from "react";
import BtnLateral from "../BtnLateral";
import { ArrowLeftFromLineIcon, Menu } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function MenuLateral() {
  const [showMenu, setShowMenu] = useState(false);
  console.log(showMenu);

  return (
    <div>
      {!showMenu && (
        <BtnLateral
          onClick={() => setShowMenu((prev) => !prev)}
          icon={Menu}
          className="mt-4 ml-3"
        />
      )}

      {showMenu && (
        <div className="min-h-200 h-full w-60 dark:bg-orbite-bg-lateral-dark bg-orbite-bg-lateral-light dark:border-orbite-bd-dark ">
          <div className="flex justify-end p-3 mb-2">
            <BtnLateral
              onClick={() => setShowMenu((prev) => !prev)}
              icon={ArrowLeftFromLineIcon}
            />
          </div>

          <div className="flex flex-col items-center text-orbite-p-text-light dark:text-orbite-pt-text-dark">
            <strong className="text-lg">Seu Universo</strong>
            <p className="p-3">
              Faça login ou cadastre-se para acessar seu universo
            </p>

            <div className="flex gap-4">
              <Link
                href="/login"
                className={clsx(
                  "dark:bg-orbite-caret-dark bg-orbite-caret-light  text-orbite-pt-text-dark",
                  "flex items-center justify-center self-center h-10 w-24 rounded mt-4",
                  "md:text-xl md:h-12 md:w-32",
                  "font-bold text-2sm hover:brightness-75 transition"
                )}
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className={clsx(
                  "dark:bg-orbite-caret-dark bg-orbite-caret-light text-orbite-pt-text-dark",
                  "flex items-center justify-center self-center h-10 w-24 rounded mt-4",
                  "md:text-xl md:h-12 md:w-32",
                  "font-bold text-2sm hover:brightness-75 transition"
                )}
              >
                Cadastro
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
