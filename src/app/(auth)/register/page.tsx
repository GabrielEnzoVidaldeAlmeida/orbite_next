import RegisterInput from "@/components/RegisterInput";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div
      className={clsx(
        "flex flex-col min-h-screen p-4",
        "sm:flex-row sm:items-center",
        "lg:gap-20"
      )}
    >
      <div className="sm:w-1/2 flex justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={920}
          height={920}
          className="max-w-full h-auto"
          priority
        />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-center">
        <h1
          className={clsx(
            "text-orbite-pt-text-dark font-extrabold text-2xl",
            "md:text-3xl md:mb-6",
            "text-center mb-2"
          )}
        >
          Cadastro
        </h1>
        <form className="flex flex-col gap-6 w-full max-w-sm mx-auto px-4">
          <RegisterInput labelInput="Nome:" type="text" />
          <RegisterInput labelInput="E-mail:" type="email" />
          <RegisterInput labelInput="Senha:" type="password" />
          <RegisterInput labelInput="Confirme sua senha:" type="password" />
          <Link
            href="/"
            className={clsx(
              "bg-link-login text-orbite-pt-text-dark",
              "flex items-center justify-center self-center h-10 w-24 rounded mt-4",
              "md:text-xl md:h-12 md:w-32",
              "font-bold text-2sm hover:brightness-75 transition"
            )}
          >
            Cadastrar
          </Link>
        </form>

        <div className="flex gap-1 mt-6 justify-center font-bold">
          <p className="text-orbite-pt-text-dark">Já tem uma conta?</p>
          <Link
            href="/login"
            className="text-link-login hover:text-orbite-caret-dark transition"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
