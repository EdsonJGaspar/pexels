import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-96 relative overflow-hidden">
        <Image
          src={"/pexels-kolkatarchobiwala.jpg"}
          alt="Banner pexel"
          fill
          className="object-cover object-center brightness-50"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="p-4 w-2xl text-center font-serif text-3xl md:text-4xl text-foreground drop-shadow-lg">
            As melhores fotos de banco de imagens gratuitas, imagens e vídeos
            livres de royalties compartilhados por criadores.
          </h1>
        </div>
      </section>
    </main>
  );
}
