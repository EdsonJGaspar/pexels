import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-900">
      <main className="max-w-xl mx-auto px-8 py-4 border rounded-md bg-zinc-900 border-zinc-950 space-y-4">
        <h1 className="text-2xl font-bold text-center font-mono text-zinc-200">
          Pagina de Login
        </h1>
        <form className="space-y-3">
          <div>
            <label className="text-zinc-300">Usuario</label>
            <Input
              placeholder="Insira o seu usuario"
              className="text-lg px-4 py-1.5 rounded-lg text-zinc-300 border-zinc-400"
            />
          </div>
          <div>
            <label className="text-zinc-300">Senha</label>
            <Input
              placeholder="Insira o seu usuario"
              className="text-lg px-4 py-1.5 rounded-lg text-zinc-300 border-zinc-400"
              type="password"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
