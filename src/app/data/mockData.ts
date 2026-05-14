import { Device, Course, User, Certificate } from '../types';

export const mockDevices: Device[] = [
  {
    id: 'dev-1',
    name: 'Semáforo IoT',
    category: 'Projetos Especiais',
    description: 'Conheça nosso Semaforo IoT para controle de tráfego em parques industriais',
    courses: []
  },
  {
    id: 'dev-2',
    name: 'Contador De Passoas',
    category: 'Contadores',
    description: 'O Sirros Contador de Pessoas automatiza o controle de fluxo em ambientes, oferecendo contagem precisa de entradas e saídas',
    courses: []
  },
  {
    id: 'dev-3',
    name: 'SIRROS Data Tag',
    category: 'Contadores',
    description: 'O Data Tag é um dispositivo inovador que simplifica a coleta de dados em ambientes de colheita.',
    courses: []
  },
  {
    id: 'dev-4',
    name: 'SIRROS Inclinômetro',
    category: 'Projetos Especiais',
    description: 'O Sirros Inclinômetro é uma solução completa de hardware com tecnologia IoT para detectar inclinação em estruturas móveis com precisão.',
    courses: []
  },
  {
    id: 'dev-5',
    name: 'SIRROS LogiTrack',
    category: 'Geolocalização',
    description: 'Conheça o Sirros LogiTrack, um dispositivo de geolocalização voltado para a indústria 4.0. Ele coleta dados em tempo real de veículos industriais.',
    courses: []
  },
  {
    id: 'dev-6',
    name: 'SIRROS SmartDoor',
    category: 'Projetos Especiais',
    description: 'Conheça agora mesmo o Smart Door, dispositivo de monitoramento de porta sem fio, que usa a tecnologia LoRaWAN para a transmissão de dados de monitoramento.',
    courses: []
  }
];

export const mockCourses: Course[] = [
  {
    id: 'course-1',
    title: 'Instalação e Configuração do SIRROS LogiTrack ',
    description: 'Aprenda a instalar, configurar e gerenciar o SIRROS LogiTrack',
    deviceId: 'dev-1',
    deviceName: 'Geolocalização',
    totalDuration: '4h 30min',
    enrolledStudents: 145,
    completionRate: 78,
    difficulty: 'beginner',
    modules: [
      {
        id: 'mod-1-1',
        title: 'Introdução ao Gateway',
        description: 'Conceitos básicos e arquitetura do gateway',
        order: 1,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-1-1-1',
            title: 'O que é um Gateway IoT?',
            type: 'video',
            duration: '15min',
            content: 'Introdução aos conceitos de Gateway IoT',
            videoUrl: 'https://example.com/video1',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-1-1-2',
            title: 'Arquitetura do SIRROS Gateway',
            type: 'pdf',
            duration: '20min',
            content: 'Documentação técnica da arquitetura',
            pdfUrl: 'https://example.com/pdf1',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-1-1-3',
            title: 'Quiz: Fundamentos',
            type: 'quiz',
            duration: '10min',
            content: 'Teste seus conhecimentos básicos',
            completed: false,
            order: 3
          }
        ]
      },
      {
        id: 'mod-1-2',
        title: 'Instalação Física',
        description: 'Procedimentos de instalação e montagem',
        order: 2,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-1-2-1',
            title: 'Requisitos de Instalação',
            type: 'text',
            duration: '10min',
            content: 'Lista de requisitos e preparação',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-1-2-2',
            title: 'Passo a Passo da Montagem',
            type: 'video',
            duration: '25min',
            content: 'Vídeo demonstrativo da instalação',
            videoUrl: 'https://example.com/video2',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-1-2-3',
            title: 'Conexões e Cabeamento',
            type: 'video',
            duration: '30min',
            content: 'Como fazer as conexões corretas',
            videoUrl: 'https://example.com/video3',
            completed: false,
            order: 3
          }
        ]
      },
      {
        id: 'mod-1-3',
        title: 'Configuração Inicial',
        description: 'Primeiros passos na configuração',
        order: 3,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-1-3-1',
            title: 'Acesso à Interface Web',
            type: 'video',
            duration: '15min',
            content: 'Como acessar e navegar na interface',
            videoUrl: 'https://example.com/video4',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-1-3-2',
            title: 'Configuração de Rede',
            type: 'video',
            duration: '20min',
            content: 'Configurando conexão de rede',
            videoUrl: 'https://example.com/video5',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-1-3-3',
            title: 'Pareamento de Dispositivos',
            type: 'video',
            duration: '25min',
            content: 'Como parear dispositivos ao gateway',
            videoUrl: 'https://example.com/video6',
            completed: false,
            order: 3
          },
          {
            id: 'lesson-1-3-4',
            title: 'Quiz: Configuração',
            type: 'quiz',
            duration: '15min',
            content: 'Avalie seu conhecimento',
            completed: false,
            order: 4
          }
        ]
      },
      {
        id: 'mod-1-4',
        title: 'Manutenção e Troubleshooting',
        description: 'Solução de problemas comuns',
        order: 4,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-1-4-1',
            title: 'Manutenção Preventiva',
            type: 'pdf',
            duration: '20min',
            content: 'Guia de manutenção preventiva',
            pdfUrl: 'https://example.com/pdf2',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-1-4-2',
            title: 'Problemas Comuns e Soluções',
            type: 'text',
            duration: '30min',
            content: 'Lista de problemas e como resolver',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-1-4-3',
            title: 'Atualização de Firmware',
            type: 'video',
            duration: '20min',
            content: 'Como atualizar o firmware',
            videoUrl: 'https://example.com/video7',
            completed: false,
            order: 3
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Instalação e Configuração do SIRROS Data Tag',
    description: 'Curso completo sobre o Contador SIRROS Data Tag',
    deviceId: 'dev-2',
    deviceName: 'Contadores',
    totalDuration: '3h 45min',
    enrolledStudents: 98,
    completionRate: 85,
    difficulty: 'intermediate',
    modules: [
      {
        id: 'mod-2-1',
        title: 'Fundamentos do Sensor',
        description: 'Princípios de funcionamento',
        order: 1,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-2-1-1',
            title: 'Tecnologia de Medição',
            type: 'video',
            duration: '20min',
            content: 'Como funciona o sensor',
            videoUrl: 'https://example.com/video8',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-2-1-2',
            title: 'Especificações Técnicas',
            type: 'pdf',
            duration: '15min',
            content: 'Datasheet completo',
            pdfUrl: 'https://example.com/pdf3',
            completed: false,
            order: 2
          }
        ]
      },
      {
        id: 'mod-2-2',
        title: 'Instalação em Campo',
        description: 'Procedimentos de instalação',
        order: 2,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-2-2-1',
            title: 'Escolha do Local de Instalação',
            type: 'video',
            duration: '25min',
            content: 'Critérios para escolha do local',
            videoUrl: 'https://example.com/video9',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-2-2-2',
            title: 'Montagem e Fixação',
            type: 'video',
            duration: '30min',
            content: 'Passo a passo da montagem',
            videoUrl: 'https://example.com/video10',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-2-2-3',
            title: 'Conexão ao Gateway',
            type: 'video',
            duration: '20min',
            content: 'Pareamento com o gateway',
            videoUrl: 'https://example.com/video11',
            completed: false,
            order: 3
          }
        ]
      },
      {
        id: 'mod-2-3',
        title: 'Calibração e Ajustes',
        description: 'Procedimentos de calibração',
        order: 3,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-2-3-1',
            title: 'Calibração Inicial',
            type: 'video',
            duration: '35min',
            content: 'Processo de calibração',
            videoUrl: 'https://example.com/video12',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-2-3-2',
            title: 'Ajustes Finos',
            type: 'text',
            duration: '20min',
            content: 'Como fazer ajustes precisos',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-2-3-3',
            title: 'Quiz Final',
            type: 'quiz',
            duration: '15min',
            content: 'Avaliação final',
            completed: false,
            order: 3
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'Atuador Smart - Programação e Controle',
    description: 'Aprenda a programar e controlar o atuador inteligente',
    deviceId: 'dev-3',
    deviceName: 'SIRROS Actuator Smart',
    totalDuration: '5h 20min',
    enrolledStudents: 67,
    completionRate: 72,
    difficulty: 'advanced',
    modules: [
      {
        id: 'mod-3-1',
        title: 'Introdução aos Atuadores',
        description: 'Conceitos básicos',
        order: 1,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-3-1-1',
            title: 'Tipos de Atuadores',
            type: 'video',
            duration: '25min',
            content: 'Visão geral dos tipos',
            videoUrl: 'https://example.com/video13',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-3-1-2',
            title: 'Aplicações Industriais',
            type: 'pdf',
            duration: '20min',
            content: 'Casos de uso',
            pdfUrl: 'https://example.com/pdf4',
            completed: false,
            order: 2
          }
        ]
      },
      {
        id: 'mod-3-2',
        title: 'Programação Básica',
        description: 'Primeiros programas',
        order: 2,
        completedLessons: 0,
        lessons: [
          {
            id: 'lesson-3-2-1',
            title: 'Interface de Programação',
            type: 'video',
            duration: '30min',
            content: 'Conhecendo a interface',
            videoUrl: 'https://example.com/video14',
            completed: false,
            order: 1
          },
          {
            id: 'lesson-3-2-2',
            title: 'Primeiro Programa',
            type: 'video',
            duration: '40min',
            content: 'Criando seu primeiro programa',
            videoUrl: 'https://example.com/video15',
            completed: false,
            order: 2
          },
          {
            id: 'lesson-3-2-3',
            title: 'Lógica de Controle',
            type: 'video',
            duration: '45min',
            content: 'Programação de lógica',
            videoUrl: 'https://example.com/video16',
            completed: false,
            order: 3
          }
        ]
      }
    ]
  }
];

export const currentUser: User = {
  id: 'user-1',
  name: 'João Silva',
  email: 'joao.silva@empresa.com',
  role: 'technician',
  enrolledCourses: ['course-1', 'course-2'],
  completedCourses: []
};

export const mockCertificates: Certificate[] = [
  {
    id: 'cert-1',
    userId: 'user-1',
    courseId: 'course-1',
    courseName: 'SIRROS LogiTrack',
    completionDate: '2026-06-15',
    certificateUrl: '#',
    score: 100
  }
];
