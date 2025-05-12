import RegisterInput from "@/components/RegisterInput";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen px-6">
      <div className="h-1/2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={1280}
          height={720}
          priority
        />
      </div>

      <div className="h-1/2">
        <form className="flex flex-col  gap-6">
          <RegisterInput
            labelInput="Nome:"
            type="text"
            placeholder="digite seu nome..."
          />
          <RegisterInput
            labelInput="Senha:"
            type="password"
            placeholder="digite sua senha..."
          />
          {/* <button className="text-orbite-ct-text-light hover:brightness-75 transition font-bold text-sm">
            EXIBIR
          </button> */}
          <Link
            href="/"
            className="bg-link-login text-orbite-pt-text-dark font-bold rounded h-10 w-24 flex items-center justify-center self-center mt-4 text-sm hover:brightness-75 transition"
          >
            Login
          </Link>
        </form>
        <div className="flex gap-1 mt-6 justify-center font-bold">
          <p className="text-orbite-pt-text-dark">Esqueceu a senha? </p>{" "}
          <Link
            href="/register"
            className="text-link-login hover:text-orbite-caret-dark transition"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
}
