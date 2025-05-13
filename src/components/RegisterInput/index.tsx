"use client";

import clsx from "clsx";
import { useState } from "react";

type RegisterInputProps = {
  labelInput: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RegisterInput({
  labelInput,
  className,
  type,
  ...rest
}: RegisterInputProps) {
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="flex flex-col gap-1">
      <strong className="text-orbite-pt-text-dark">{labelInput}</strong>
      <div className="relative">
        <input
          {...rest}
          type={inputType}
          className={clsx(
            "h-8 py-4 px-2 pr-16 border-2 outline-0 md:py-5 w-full",
            "border-b-orbite-caret-dark border-transparent",
            "text-orbite-pt-text-dark text-sm",
            "focus:rounded-md focus:border-orbite-caret-light focus:border-2",
            "transition-all duration-200 ",
            className
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className={clsx(
              "text-orbite-pt-text-dark text-xs font-bold",
              "absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
            )}
          >
            {showPassword ? "OCULTAR" : "EXIBIR"}
          </button>
        )}
      </div>
    </div>
  );
}
