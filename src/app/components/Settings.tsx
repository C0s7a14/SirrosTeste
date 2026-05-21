import {
  User,
  Mail,
  Shield,
} from 'lucide-react';

interface SettingsProps {
  user: {
    name: string;
    email: string;
  };

 /* onLogout: () => void;*/
}

export function Settings({
  user,
  /*onLogout*/
}: SettingsProps) {
  return (
    <div className="min-h-screen bg-background p-6">

      <div className="max-w-4xl mx-auto space-y-6">

        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Configurações
          </h1>

          <p className="text-muted-foreground mt-1">
            Gerencie sua conta e preferências
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 space-y-6">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
              {user.name?.charAt(0)}
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                {user.name}
              </h2>

              <p className="text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-background border border-border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-3">
                <User className="w-5 h-5 text-primary" />

                <h3 className="font-semibold">
                  Nome do Usuário
                </h3>
              </div>

              <p className="text-muted-foreground">
                {user.name}
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-primary" />

                <h3 className="font-semibold">
                  E-mail
                </h3>
              </div>

              <p className="text-muted-foreground">
                {user.email}
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-primary" />

                <h3 className="font-semibold">
                  Segurança
                </h3>
              </div>

              <p className="text-muted-foreground">
                Conta protegida
              </p>
            </div>
          </div>

      {/*   <div className="pt-4 border-t border-border">

            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-xl hover:bg-red-600 transition"
            >
              <LogOut className="w-5 h-5" />
              Sair da Conta
            </button>
          </div> */} 
        </div>
      </div>
    </div>
  );
}