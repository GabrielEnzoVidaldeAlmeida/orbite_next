import clsx from "clsx";
import Link from "next/link";

type LinkFooterProps = {
  text: string;
  linkProps: React.ComponentProps<typeof Link>;
};

export default function LinkFooter({ text, linkProps }: LinkFooterProps) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "dark:hover:text-orbite-caret-dark",
        "hover:text-orbite-links-hover-light",
        "inline-block font-bold lg:text-lg",

        linkProps.className
      )}
    >
      {text}
    </Link>
  );
}
