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

  function handleRegister() {
    navigate({ to: "/register" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      <div className="absolute top-6 right-6 md:top-8 md:right-12 flex gap-4 z-50">
        <Button 
          variant="outline" 
          className="bg-black text-white border-2 border-white/70 hover:bg-white/30 hover:text-white cursor-pointer"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button 
          className="bg-white text-black hover:bg-gray-200 cursor-pointer"
          onClick={handleRegister}
        >
          Registrar
        </Button>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="max-w-xl w-full flex flex-col items-center gap-8 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-lg text-center">
            Bem-vindo à<span className="bg-white text-black px-2 rounded ml-2">Pitang Store</span>
          </h1>
          <p className="text-lg text-gray-200 text-center max-w-md">
            Um projeto prático desenvolvido para a 2ª etapa do processo seletivo de estágio da Pitang. Uma aplicação feita com React, Tailwind e shadcn/ui.
          </p>
          <Button variant="default" className="mt-4 px-8 py-5 text-lg font-semibold cursor-pointer">
            Buy now!
          </Button>
          <div className="w-full h-1 bg-gradient-to-r from-white/10 via-white/40 to-white/10 rounded-full mt-8" />
          <div className="flex gap-4 mt-4 opacity-80">
            <span className="uppercase tracking-widest text-xs">atividade 02 - Pitang</span>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/10 py-6 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-bold bg-white text-black px-2 rounded">Pitang Store</span>
            <p className="text-xs text-gray-400">© 2026 Pitang Store. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-4 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Sobre</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>

          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
