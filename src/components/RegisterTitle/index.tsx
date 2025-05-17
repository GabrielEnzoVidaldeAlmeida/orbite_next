import clsx from "clsx";

type RegisterTitle = {
  title: string;
};

export default function RegisterTitle({ title }: RegisterTitle) {
  return (
    <h1
      className={clsx(
        "text-orbite-pt-text-dark font-extrabold text-2xl",
        "md:text-3xl md:mb-6",
        "text-center mb-2"
      )}
    >
      {title}
    </h1>
  );
}
