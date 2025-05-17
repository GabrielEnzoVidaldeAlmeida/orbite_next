import RegisterBtn from "@/components/RegisterBtn";
import RegisterInput from "@/components/RegisterInput";
import RegisterTitle from "@/components/RegisterTitle";
import VerifyAccountRegister from "@/components/VerifyAccountRegister";
import clsx from "clsx";
import Image from "next/image";

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
        <RegisterTitle title="Cadastro" />
        <form className="flex flex-col gap-6 w-full max-w-sm mx-auto px-4">
          <RegisterInput labelInput="Nome:" type="text" />
          <RegisterInput labelInput="E-mail:" type="email" />
          <RegisterInput labelInput="Senha:" type="password" />
          <RegisterInput labelInput="Confirme sua senha:" type="password" />

          <RegisterBtn linkProps={{ href: "/" }} text="Cadastrar" />
        </form>
        <VerifyAccountRegister
          labelLink="Já tem uma conta?"
          linkProps={{ href: "/login" }}
          linkText="Entrar"
        />
      </div>
    </div>
  );
}
