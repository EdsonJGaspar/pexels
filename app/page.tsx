import { InputRoot } from "@/components/web/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-96 relative overflow-hidden shadow-2xl">
        <Image
          src={"/pexels-kolkatarchobiwala.jpg"}
          alt="Banner pexel"
          fill
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="p-4 w-2xl text-center font-serif text-3xl md:text-4xl  drop-shadow-lg text-secondary">
            As melhores fotos de banco de imagens gratuitas, imagens e vídeos
            livres de royalties compartilhados por criadores.
          </h1>
        </div>
      </section>
      <section className="py-6">
        <InputRoot icon={Search} />
        <ul className="flex gap-6 items-center ml-9 mt-8">
          <li className="text-2xl font-semibold text-secondary">
            Fotos Gratuitas
          </li>
          <li className="text-2xl font-semibold">Mais populares</li>
          <li className="text-2xl font-semibold">Novas</li>
        </ul>
      </section>
      <section className="flex flex-wrap gap-4 px-8 pb-6">
        <Image
          src={"/imagen.png"}
          alt="image"
          width={250}
          height={100}
          className="object-cover object-center"
        />
      </section>
    </main>
  );
}
