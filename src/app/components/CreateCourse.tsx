import { useState } from 'react';
import {
  Plus,
  Trash2,
  BookOpen,
  Save,
  Upload,
  FileText,
  Send,
} from 'lucide-react';

export function CreateCourse() {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    instructor: '',
    category: '',
    level: '',
    thumbnail: '',
  });

  const [question, setQuestion] = useState('');
  const [pdfName, setPdfName] = useState('');

  const [modules, setModules] = useState([
    {
      id: 1,
      title: '',
      content: '',
    },
  ]);

  const handleCourseChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleModuleChange = (
    id: number,
    field: string,
    value: string
  ) => {
    setModules((prev) =>
      prev.map((module) =>
        module.id === id ? { ...module, [field]: value } : module
      )
    );
  };

  const addModule = () => {
    setModules((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: '',
        content: '',
      },
    ]);
  };

  const removeModule = (id: number) => {
    setModules((prev) => prev.filter((module) => module.id !== id));
  };

  const handleSubmit = () => {
    const newCourse = {
      ...courseData,
      modules,
    };

    console.log('Curso criado:', newCourse);

    alert('Curso criado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Criar Curso
            </h1>

            <p className="text-muted-foreground mt-1">
              Cadastre um novo treinamento
            </p>
          </div>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl hover:opacity-90 transition"
          >
            <Save className="w-5 h-5" />
            Salvar Curso
          </button>
        </div>

        {/* INFORMAÇÕES */}
        <div className="bg-card border border-border rounded-3xl p-6 space-y-5 shadow-sm">

          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />

            <h2 className="text-xl font-semibold">
              Informações do Curso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>
              <label className="text-sm text-muted-foreground">
                Título do Curso
              </label>

              <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleCourseChange}
                className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                placeholder="Digite o título"
              />
            </div>


            <div>
              <label className="text-sm text-muted-foreground">
                Categoria
              </label>

              <input
                type="text"
                name="category"
                value={courseData.category}
                onChange={handleCourseChange}
                className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ex: IoT"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground">
                Nível
              </label>

              <select
                name="level"
                value={courseData.level}
                onChange={handleCourseChange}
                className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecione</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">
              Descrição
            </label>

            <textarea
              name="description"
              value={courseData.description}
              onChange={handleCourseChange}
              rows={5}
              className="w-full mt-2 bg-background border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Descrição do curso"
            />
          </div>
        </div>

        {/* PDF */}
        <div className="bg-card border-2 rounded-3xl p-10 text-center">

          <div className="flex flex-col items-center justify-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-500" />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-500">
                Adicionar PDF ao treinamento
              </h2>

              <p className="text-slate-500 mt-2">
                Faça upload do material do curso
              </p>
            </div>

            <label className="cursor-pointer">
              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];

                  if (file) {
                    setPdfName(file.name);
                  }
                }}
              />

              <div className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition">
                <Upload className="w-5 h-5" />
                Selecionar PDF
              </div>
            </label>

            {pdfName && (
              <div className="bg-white border border-blue-200 rounded-xl px-4 py-3 mt-3">
                <p className="text-sm text-slate-700">
                  PDF selecionado:
                </p>

                <p className="font-medium text-blue-600">
                  {pdfName}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* IA 
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">

          <div className="bg-slate-900 px-6 py-5">
            <h2 className="text-white text-xl font-semibold">
              Perguntar sobre o conteúdo
            </h2>
          </div>

          <div className="p-10 min-h-[220px] flex items-center justify-center">
            <p className="text-muted-foreground text-lg">
              Faça uma pergunta sobre o PDF enviado.
            </p>
          </div>

          <div className="border-t border-border p-4 flex gap-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Digite sua pergunta..."
              className="flex-1 border border-blue-200 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 rounded-2xl transition flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar
            </button>
          </div>
        </div>

        */}

        {/* MÓDULOS */}
        <div className="bg-card border border-border rounded-3xl p-6 space-y-5 shadow-sm">

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              Módulos do Curso
            </h2>

            <button
              onClick={addModule}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition"
            >
              <Plus className="w-4 h-4" />
              Adicionar Módulo
            </button>
          </div>

          <div className="space-y-5">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="border border-border rounded-2xl p-5 bg-background"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">
                    Módulo {index + 1}
                  </h3>

                  {modules.length > 1 && (
                    <button
                      onClick={() => removeModule(module.id)}
                      className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="space-y-4">

                  <input
                    type="text"
                    value={module.title}
                    onChange={(e) =>
                      handleModuleChange(
                        module.id,
                        'title',
                        e.target.value
                      )
                    }
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Título do módulo"
                  />

                  <textarea
                    rows={5}
                    value={module.content}
                    onChange={(e) =>
                      handleModuleChange(
                        module.id,
                        'content',
                        e.target.value
                      )
                    }
                    className="w-full bg-card border border-border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Conteúdo do módulo"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}