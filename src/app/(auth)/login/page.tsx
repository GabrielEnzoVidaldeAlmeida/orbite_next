import RegisterBtn from "@/components/RegisterBtn";
import RegisterInput from "@/components/RegisterInput";
import RegisterTitle from "@/components/RegisterTitle";
import VerifyAccountRegister from "@/components/VerifyAccountRegister";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
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
        <RegisterTitle title="Login" />
        <form className="flex flex-col gap-6 w-full max-w-sm mx-auto px-4">
          <RegisterInput labelInput="Nome:" type="text" />
          <RegisterInput labelInput="Senha:" type="password" />

          <RegisterBtn
            linkProps={{
              href: "/",
            }}
            text="Entrar"
          />
        </form>

        <VerifyAccountRegister
          labelLink="Não tem uma conta?"
          linkProps={{ href: "/register" }}
          linkText="Criar conta"
        />

        <Link
          href="#"
          className={clsx(
            "text-orbite-pt-text-dark hover:text-orbite-caret-dark",
            " mt-4 underline self-center justify-center "
          )}
        >
          Esqueceu a senha?
        </Link>
      </div>
    </div>
  );
}
