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
        "inline-block font-bold lg:text-lg",
        "hover:text-orbite-links-hover-light",
        "dark:hover:text-orbite-caret-dark",
        linkProps.className
      )}
    >
      {text}
    </Link>
  );
}
