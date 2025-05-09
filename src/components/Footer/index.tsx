import { Facebook } from "@/assets/svgs/icon-svg/Facebook";
import { Instagram } from "@/assets/svgs/icon-svg/Instagram";
import { X } from "@/assets/svgs/icon-svg/X";
import clsx from "clsx";
import LabelFooter from "../LabelFooter";
import LinkFooter from "../LinkFooter";
import SvgFooter from "../SvgFooter";

export default function Footer() {
  return (
    <footer
      className={clsx(
        "border-t-2",
        " dark:bg-orbite-footer-dark dark:border-t-orbite-bd-dark dark:text-orbite-pt-text-dark",
        "bg-orbite-footer-light border-t-orbite-bd-light text-shadow-orbite-p-text-light"
      )}
    >
      <div
        className={clsx(
          "flex flex-col p-2 gap-6",
          "md:flex-row md:justify-between md:p-8",
          "lg:py-20 lg:px-28"
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-6",
            "md:flex-row md:gap-10",
            "lg:gap-20"
          )}
        >
          <div className="flex flex-col">
            <LabelFooter label="Institucional" />
            <div className="flex flex-col gap-3 ">
              <div>
                <LinkFooter linkProps={{ href: "#" }} text="Sobre nós" />
              </div>
              <div>
                <LinkFooter
                  linkProps={{ href: "#" }}
                  text="Seu podcast no Orbite"
                />
              </div>
              <div>
                <LinkFooter
                  linkProps={{ href: "#" }}
                  text="Aplicativo móvel (em desenvolvimento)"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col ">
            <LabelFooter label="Ajuda" />
            <div>
              <LinkFooter linkProps={{ href: "#" }} text="Suporte" />
            </div>
          </div>
        </div>

        <div>
          <LabelFooter align="right" label="Redes Sociais" />
          <div className="flex gap-2 lg:gap-6 mt-2 md:justify-self-end">
            <SvgFooter svg={Instagram} linkProps={{ href: "#" }} />
            <SvgFooter svg={X} linkProps={{ href: "#" }} />
            <SvgFooter svg={Facebook} linkProps={{ href: "#" }} />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "w-full border-t-4",
          "border-orbite-bd-light",
          "dark:border-orbite-bd-dark p-2 md:px-8 lg:px-28"
        )}
      >
        <strong className="sm:text-xl">Orbite &copy; 2025</strong>
      </div>
    </footer>
  );
}
