import clsx from "clsx";
import { LucideIcon } from "lucide-react";

type BtnLateralProps = {
  onClick: () => void;
  icon: LucideIcon;
  className?: string;
};

export default function BtnLateral({
  onClick,
  icon: Icon,
  className,
}: BtnLateralProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "hover:brightness-75  transition cursor-pointer",
        className
      )}
    >
      <Icon
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
