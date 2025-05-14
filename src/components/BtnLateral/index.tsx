import clsx from "clsx";
import { Menu } from "lucide-react";

export default function BtnLateral() {
  return (
    <button className="hover:brightness-75 mt-4 ml-3 transition cursor-pointer">
      <Menu
        className={clsx(
          "text-black bg-orbite-caret-light dark:bg-orbite-caret-dark",
          "border-1 border-orbite-bd-light dark:border-orbite-bd-dark",
          "rounded p-1 w-7 h-7",
          "sm:w-8 sm:h-8 sm:border-2",
          "md:w-9 md:h-9"
        )}
      />
    </button>
  );
}
