import clsx from "clsx";

type RegisterInputProps = {
  labelInput: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RegisterInput({
  labelInput,
  className,
  ...rest
}: RegisterInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <strong className="text-orbite-pt-text-dark">{labelInput}</strong>
      <input
        {...rest}
        className={clsx(
          "h-8 p-1 border-2 outline-0",
          "border-b-orbite-caret-dark border-transparent",
          "text-orbite-pt-text-dark text-sm",
          "focus:rounded-md focus:border-orbite-bd-dark focus:border-2",
          "transition-all duration-200",
          className // permite sobrescrever ou adicionar classes
        )}
      />
    </div>
  );
}
