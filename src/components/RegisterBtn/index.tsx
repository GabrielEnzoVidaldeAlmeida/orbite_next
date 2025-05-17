import clsx from "clsx";
import Link from "next/link";

type RegisterBtnProps = {
  text: string;
  linkProps: React.ComponentProps<typeof Link>;
};

export default function RegisterBtn({ text, linkProps }: RegisterBtnProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "dark:bg-orbite-caret-dark bg-orbite-caret-light text-orbite-pt-text-dark",
        "flex items-center justify-center self-center h-10 w-24 rounded mt-4",
        "md:text-xl md:h-12 md:w-32",
        "font-bold text-2sm hover:brightness-75 transition",
        linkProps.className
      )}
    >
      {text}
    </Link>
  );
}
