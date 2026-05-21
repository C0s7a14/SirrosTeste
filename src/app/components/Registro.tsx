import { useState } from 'react';
import sirrosLogo from '../../imports/logo.png';

interface RegisterProps {
  onRegister: (
    name: string,
    email: string,
    password: string
  ) => void;

  onNavigateLogin?: () => void;
}

export function Register({
  onRegister,
  onNavigateLogin,
}: RegisterProps) {
  const [name, setName] = useState('');
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
            Criar Conta
          </h1>

          <p className="text-muted-foreground mt-2 text-center">
            Cadastre-se para acessar os treinamentos
          </p>
        </div>

        <div className="space-y-5">

          <div>
            <label className="text-sm text-muted-foreground">
              Nome
            </label>

            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

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
              placeholder="Crie uma senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={() =>
              onRegister(name, email, password)
            }
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition"
          >
            Criar Conta
          </button>

          <button
            onClick={onNavigateLogin}
            className="w-full border border-border py-3 rounded-xl hover:bg-accent transition"
          >
            Já tenho conta
          </button>
        </div>
      </div>
    </div>
  );
}