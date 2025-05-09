import clsx from "clsx";

type LabelFooterProps = {
  label: string;
  align?: "right" | "left";
};

export default function LabelFooter({
  label,
  align = "left",
}: LabelFooterProps) {
  const baseClasses =
    "font-bold sm:text-xl lg:text-2xl dark:text-gray-400 text-orbite-ct-text-light";

  const alignClasses = {
    right: "flex lg:justify-end mb-1",
    left: "mb-1 lg:mb-4",
  };

  return (
    <div className={clsx(baseClasses, alignClasses[align])}>
      <h2>{label}</h2>
    </div>
  );
}
