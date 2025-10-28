import React, { useState } from "react";

type LoginProps = {
  onSuccess?: (token: string) => void;
};

export default function LoginPage({ onSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    if (!email) return "Por favor insira o e-mail.";
    // simples validação de e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) return "Insira um e-mail válido.";
    if (!password) return "Por favor insira a senha.";
    if (password.length < 6) return "A senha precisa ter pelo menos 6 caracteres.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      const res = await fakeLoginApi(email, password);

      if (remember) localStorage.setItem("auth_token", res.token);
      else sessionStorage.setItem("auth_token", res.token);

      if (onSuccess) onSuccess(res.token);
    } catch (err: any) {
      setError(err?.message || "Erro ao tentar logar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-100 to-white p-6">
      <main className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8">
        <header className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Entrar</h1>
          <p className="text-sm text-slate-500">Acesse sua conta para continuar</p>
        </header>

        <form onSubmit={handleSubmit} aria-describedby="form-error">
          <label className="block mb-2">
            <span className="text-sm font-medium">E‑mail</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="seu@exemplo.com"
              required
              aria-required
            />
          </label>

          <label className="block mb-2 relative">
            <span className="text-sm font-medium">Senha</span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-200 px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-sky-300"
              placeholder="••••••••"
              required
              aria-required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              className="absolute right-2 top-8 text-sm opacity-70 hover:opacity-100"
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </label>

          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-slate-300 text-sky-600 focus:ring-sky-400"
              />
              Lembrar-me
            </label>

            <a href="#" className="text-sm text-sky-600 hover:underline">
              Esqueci a senha
            </a>
          </div>

          {error && (
            <div id="form-error" role="alert" className="mb-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-sky-600 text-white font-medium disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <footer className="mt-6 text-center text-sm text-slate-500">
          <p>
            Não tem conta? <a href="#" className="text-sky-600 hover:underline">Criar conta</a>
          </p>
        </footer>
      </main>
    </div>
  );
}


async function fakeLoginApi(email: string, password: string) {
  // simula uma chamada de API
  await new Promise((r) => setTimeout(r, 700));

  // regras de exemplo — remova na produção
  if (email === "usuario@exemplo.com" && password === "senha123") {
    return { token: "fake-jwt-token-abc123" };
  }

  throw new Error("E-mail ou senha inválidos.");
}
