import Link from "next/link";

type VerifyAccountRegisterProps = {
  linkText: string;
  labelLink: string;
  linkProps: React.ComponentProps<typeof Link>;
};

export default function VerifyAccountRegister({
  labelLink,
  linkText,
  linkProps,
}: VerifyAccountRegisterProps) {
  return (
    <div className="flex gap-1 mt-6 justify-center font-bold">
      <p className="text-orbite-pt-text-dark">{labelLink}</p>
      <Link
        {...linkProps}
        className="text-link-login hover:text-orbite-caret-dark transition"
      >
        {linkText}
      </Link>
    </div>
  );
}
