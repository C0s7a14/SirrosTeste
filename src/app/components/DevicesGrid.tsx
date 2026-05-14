import { Device } from '../types';
import { ChevronRight, BookOpen } from 'lucide-react';

// imagens
import SemaforoIoT from '../../imports/Semaforo IoT.png';
import ContadorDePessoas from '../../imports/Contador de Pessoas.png';
import SirrosDataTag from '../../imports/Sirros Data Tag.png';
import SirrosInclinometro from '../../imports/Sirros Inclinometro.png';
import SirrosLogiTrack from '../../imports/Sirros LogiTrack.png';
import SirrosSmartDoor from '../../imports/Sirros SmartDoor.png';
import SirrosS1 from '../../imports/Sirros S1.png';
import SirrosTrackOn from '../../imports/Sirros TrackOn.png';

interface DevicesGridProps {
  devices: Device[];
  onDeviceSelect: (deviceId: string) => void;
}

// 🔥 mapa de imagens + ficha (ligado pelo ID do mockData)
const deviceExtras: Record<string, { image: string; ficha: string[] }> = {
  "dev-1": {
    image: SemaforoIoT,
    ficha: [""]
  },
  "dev-2": {
    image: ContadorDePessoas,
    ficha: [""]
  },
  "dev-3": {
    image: SirrosDataTag,
    ficha: [""]
  },
  "dev-4": {
    image: SirrosInclinometro,
    ficha: [""]
  },
  "dev-5": {
    image: SirrosLogiTrack,
    ficha: [""]
  },
  "dev-6": {
    image: SirrosSmartDoor,
    ficha: [""]
  }
};

export function DevicesGrid({ devices, onDeviceSelect }: DevicesGridProps) {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl">Dispositivos Sirros</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Selecione um dispositivo para acessar os cursos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => {
          const extra = deviceExtras[device.id];

          return (
            <div
              key={device.id}
              onClick={() => onDeviceSelect(device.id)}
              className="bg-card border rounded-lg p-6 hover:shadow-lg cursor-pointer"
            >
              {/* topo */}
              <div className="flex justify-between mb-4">
                {extra?.image && (
                  <img
                    src={extra.image}
                    className="w-12 h-12 object-cover rounded"
                  />
                )}
                <span className="text-xs bg-accent px-2 py-1 rounded">
                  {device.category}
                </span>
              </div>

              {/* imagem grande */}
              {extra?.image && (
                <img
                  src={extra.image}
                  className="w-full h-32 object-contain mb-4"
                />
              )}

              <h3>{device.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {device.description}
              </p>

              {/* ficha */}
              {extra?.ficha && (
                <ul className="text-xs mb-3 list-disc ml-4">
                  {extra.ficha.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* cursos */}
              <div className="flex justify-between border-t pt-3 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{device.courses.length} cursos</span>
                </div>

                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}