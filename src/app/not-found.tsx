import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-yellow-500 text-6xl text-center mt-9 font-bold">
        Página 404 não encontrada!
      </h1>
      <p>Essa página que você tentou acessar não existe</p>
      <Link href="/">Voltar para o inicio</Link>
      <Image
        src="/lupa.png"
        width={900}
        height={900}
        alt="error"
        priority={true}
      />
    </div>
  );
}
