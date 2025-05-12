import RegisterInput from "@/components/RegisterInput";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div>
      <div>
        <Image src="/images/logo.png" alt="logo" width={1280} height={720} />
      </div>

      <div>
        <form className="flex flex-col px-6 gap-6">
          <RegisterInput
            labelInput="Nome:"
            type="text"
            placeholder="digite seu nome..."
          />

          <RegisterInput
            labelInput="Senha:"
            type="password"
            placeholder="digite seu nome..."
          />
        </form>
      </div>
    </div>
  );
}
