import { useState } from 'react';
import sirrosLogo from '../../imports/logo.png';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  onNavigateRegister?: () => void;
}

export function Login({
  onLogin,
  onNavigateRegister,
}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-card border border-border rounded-3xl p-8 shadow-lg">

        <div className="flex flex-col items-center mb-8">
          <img
            src={sirrosLogo}
            alt="SIRROS"
            className="h-16 mb-4"
          />

          <h1 className="text-3xl font-bold text-foreground">
            Entrar
          </h1>

          <p className="text-muted-foreground mt-2 text-center">
            Acesse sua plataforma de treinamentos IoT
          </p>
        </div>

        <div className="space-y-5">

          <div>
            <label className="text-sm text-muted-foreground">
              E-mail
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Senha
            </label>

            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={() => onLogin(email, password)}
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition"
          >
            Entrar
          </button>

          <button
            onClick={onNavigateRegister}
            className="w-full border border-border py-3 rounded-xl hover:bg-accent transition"
          >
            Criar Conta
          </button>
        </div>
      </div>
    </div>
  );
}