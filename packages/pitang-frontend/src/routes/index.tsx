import { Button } from "@/components/ui/button";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate({ to: "/login" });
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <section className="max-w-xl w-full flex flex-col items-center gap-8 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg text-center">
          Bem-vindo à <span className="bg-white text-black px-2 rounded">Pitang Store</span>
        </h1>
        <p className="text-lg text-gray-200 text-center max-w-md">
          Site destinado a atividade 02 do programa de estágio da Pitang. Desenvolvido com shadcn/ui, React Router e Tailwind.
        </p>
        <Button variant="default" className="mt-4 px-8 py-3 text-lg font-semibold cursor-pointer" onClick={handleLogin}>
          Login
        </Button>
        <div className="w-full h-1 bg-gradient-to-r from-white/10 via-white/40 to-white/10 rounded-full mt-8" />
        <div className="flex gap-4 mt-4 opacity-80">
          <span className="uppercase tracking-widest text-xs">atividade 02 - Pitang</span>
        </div>
      </section>
    </main>
  );
}
