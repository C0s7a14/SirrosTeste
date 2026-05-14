import { Certificate } from '../types';
import { Award, Download, Share2, Calendar, TrendingUp, Medal } from 'lucide-react';
import sirrosLogo from '../../imports/logo.png';

interface CertificatesProps {
  certificates: Certificate[];
}

export function Certificates({ certificates }: CertificatesProps) {
  const handleDownload = (cert: Certificate) => {
    alert(`Download do certificado: ${cert.courseName}`);
  };

  const handleShare = (cert: Certificate) => {
    alert(`Compartilhar certificado: ${cert.courseName}`);
  };

  const handleViewCertificate = (cert: Certificate) => {
    alert(`Visualizar certificado completo: ${cert.courseName}`);
  };

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <img src={sirrosLogo} alt="SIRROS Logo" className="h-8 md:h-10 w-auto" />
          <div>
            <h1 className="mb-1 text-xl md:text-2xl">Meus Certificados</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              {certificates.length} {certificates.length === 1 ? 'certificado obtido' : 'certificados obtidos'}
            </p>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 ease-in-out shadow-sm shadow-blue-500 hover:scale-3d hover:shadow-md hover:cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <Medal className="w-5 h-5 text-primary" />
              <h3>Total de Certificados</h3>
            </div>
            <p className="text-foreground">{certificates.length}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 ease-in-out shadow-sm shadow-blue-500 hover:scale-3d hover:shadow-md hover:cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3>Média de Notas</h3>
            </div>
            <p className="text-foreground">
              {certificates.length > 0
                ? Math.round(certificates.reduce((acc, cert) => acc + cert.score, 0) / certificates.length)
                : 0}%
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 ease-in-out shadow-sm shadow-blue-500 hover:scale-3d hover:shadow-md hover:cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <h3>Último Certificado</h3>
            </div>
            <p className="text-foreground">
              {certificates.length > 0
                ? new Date(certificates[certificates.length - 1].completionDate).toLocaleDateString('pt-BR')
                : '-'}
            </p>
          </div>
        </div>
      </div>

      {certificates.length === 0 ? (
        <div className="text-center py-16 bg-card border border-dashed border-border rounded-lg">
          <Award className="w-20 h-20 text-muted-foreground mx-auto mb-4 opacity-20" />
          <h3 className="mb-2">Nenhum certificado ainda</h3>
          <p className="text-muted-foreground mb-6">
            Complete cursos para ganhar certificados profissionais
          </p>
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Explorar Cursos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => handleViewCertificate(cert)}
            >
              {/* Cabeçalho do Certificado */}
              <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={sirrosLogo} alt="SIRROS Logo" className="h-8 w-auto brightness-0 invert" />
                    <div className="w-px h-8 bg-white/30"></div>
                    <div>
                      <h3 className="text-white">Certificado de Conclusão</h3>
                      <p className="text-white/80 text-sm">SIRROS IoT Academy</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                      <p className="text-sm">Nota: {cert.score}%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corpo do Certificado */}
              <div className="p-6">
                <h3 className="mb-4 text-foreground">{cert.courseName}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Data de Conclusão:</span>
                    <span className="text-foreground">
                      {new Date(cert.completionDate).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">ID do Certificado:</span>
                    <span className="text-foreground font-mono text-xs">{cert.id.toUpperCase()}</span>
                  </div>
                </div>

                {/* Ações */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(cert);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(cert);
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Compartilhar
                  </button>
                </div>
              </div>

              {/* Selo de Autenticidade */}
              <div className="border-t border-border p-4 bg-muted/30">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <img src={sirrosLogo} alt="SIRROS" className="h-4 w-auto opacity-60" />
                  <span>Certificado verificado e autenticado</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
