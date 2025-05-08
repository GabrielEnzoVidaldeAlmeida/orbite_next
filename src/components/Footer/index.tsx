import { Facebook } from "@/assets/svgs/icon-svg/Facebook";
import { Instagram } from "@/assets/svgs/icon-svg/Instagram";
import { X } from "@/assets/svgs/icon-svg/X";
import clsx from "clsx";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "border-t-2",
        " dark:bg-orbite-footer-dark dark:border-t-orbite-bd-dark dark:text-orbite-pt-text-dark",
        "bg-orbite-footer-light border-t-orbite-bd-light text-shadow-orbite-p-text-light"
      )}
    >
      <div className="flex flex-col gap-6 p-2">
        <div className="flex flex-col">
          <strong
            className={clsx(
              "mb-1",
              "dark:text-gray-400",
              "text-orbite-ct-text-light"
            )}
          >
            Institucional
          </strong>
          <div className="flex flex-col gap-3 ">
            <div>
              <Link
                href="#"
                className={clsx(
                  "inline-block",
                  "hover:text-orbite-links-hover-light",
                  "dark:hover:text-orbite-caret-dark"
                )}
              >
                Sobre nós
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className={clsx(
                  "inline-block",
                  "hover:text-orbite-links-hover-light",
                  "dark:hover:text-orbite-caret-dark"
                )}
              >
                Seu podcast na Orbite
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className={clsx(
                  "inline-block",
                  "hover:text-orbite-links-hover-light",
                  "dark:hover:text-orbite-caret-dark"
                )}
              >
                Aplicativo móvel (em desenvolvimento)
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col ">
          <strong
            className={clsx(
              "mb-1",
              "dark:text-gray-400",
              "text-orbite-ct-text-light"
            )}
          >
            Ajuda
          </strong>
          <div>
            <Link
              href="#"
              className={clsx(
                "inline-block",
                "hover:text-orbite-links-hover-light",
                "dark:hover:text-orbite-caret-dark"
              )}
            >
              Suporte
            </Link>
          </div>
        </div>

        <div>
          <strong
            className={clsx(
              "mb-1",
              "dark:text-gray-400",
              "text-orbite-ct-text-light"
            )}
          >
            Redes Sociais
          </strong>
          <div className="flex gap-2 mt-2">
            <Link href="#" className="w-9 h-9">
              <Instagram />
            </Link>
            <Link href="#" className="w-9 h-9">
              <X />
            </Link>
            <Link href="#" className="w-9 h-9">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "w-full border-t-4",
          "border-orbite-bd-light",
          "dark:border-orbite-bd-dark p-2"
        )}
      >
        <strong>Orbite &copy; 2025</strong>
      </div>
    </footer>
  );
}
