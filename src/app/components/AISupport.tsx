import { useState } from 'react';
import { Send, Bot, User, Sparkles, FileText, Image as ImageIcon, Zap } from 'lucide-react';
import { ChatMessage } from '../types';
import sirrosLogo from '../../imports/logo.png';

export function AISupport() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou o assistente virtual da SIRROS IoT. Como posso ajudá-lo hoje? Posso responder dúvidas sobre instalação, configuração, troubleshooting e muito mais!',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickQuestions = [
    'Como instalar o Gateway IoT?',
    'Erro de conexão no sensor',
    'Como calibrar o sensor de temperatura?',
    'Atualização de firmware',
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Entendi sua pergunta sobre "${input}". Com base na documentação da SIRROS IoT, aqui está o que encontrei:\n\n**Passo a passo:**\n\n1. Verifique se todos os componentes estão disponíveis\n2. Conecte o dispositivo à fonte de alimentação\n3. Configure as conexões de rede conforme o manual\n4. Execute o processo de calibração inicial\n\nPrecisa de mais detalhes sobre algum desses passos?`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card p-4 md:p-6">
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <img src={sirrosLogo} alt="SIRROS Logo" className="h-6 md:h-8 w-auto" />
          <div className="w-px h-6 md:h-8 bg-border"></div>
          <div>
            <h1 className="mb-1 text-xl md:text-2xl">Assistente IA</h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Suporte técnico inteligente 24/7
            </p>
          </div>
        </div>

        {/* Recursos da IA */}
        <div className="grid grid-cols-3 gap-3 mt-6 ">
          <div className="flex items-center gap-2 p-3 bg-accent rounded-lg transition duration-300 ease-in shadow-sm shadow-blue-500 hover:cursor-pointer ">
            <FileText className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Base de</p>
              <p className="text-sm">Documentação</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-accent rounded-lg transition duration-300 ease-in shadow-sm shadow-blue-500 hover:cursor-pointer">
            <ImageIcon className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Análise de</p>
              <p className="text-sm">Imagens</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 bg-accent rounded-lg transition duration-300 ease-in shadow-sm shadow-blue-500 hover:cursor-pointer">
            <Zap className="w-4 h-4 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Respostas</p>
              <p className="text-sm">Instantâneas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === 'assistant'
                  ? 'bg-gradient-to-br from-primary to-secondary'
                  : 'bg-muted'
              }`}>
                {message.role === 'assistant' ? (
                  <Bot className="w-5 h-5 text-white" />
                ) : (
                  <User className="w-5 h-5 text-foreground" />
                )}
              </div>
              <div className={`flex-1 ${message.role === 'user' ? 'flex justify-end' : ''}`}>
                <div className={`inline-block p-4 rounded-lg max-w-2xl ${
                  message.role === 'assistant'
                    ? 'bg-card border border-border'
                    : 'bg-primary text-primary-foreground'
                }`}>
                  <p className="whitespace-pre-line">{message.content}</p>
                  <p className={`text-xs mt-2 ${
                    message.role === 'assistant'
                      ? 'text-muted-foreground'
                      : 'text-primary-foreground/70'
                  }`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-card border border-border p-4 rounded-lg">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Questions */}
      {messages.length <= 1 && (
        <div className="border-t border-border p-6 bg-card ">
          <p className="text-sm text-muted-foreground mb-3">Perguntas frequentes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {quickQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickQuestion(question)}
                className="p-3 text-left border border-border rounded-lg hover:bg-accent hover:border-primary transition-colors text-sm"
              >
                <Sparkles className="w-4 h-4 text-primary mb-1" />
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border p-4 md:p-6 bg-card">
        <div className="max-w-4xl mx-auto flex gap-2 md:gap-3 ">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua dúvida ou problema técnico..."
            className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-4 md:w-5 h-4 md:h-5" />
            <span className="hidden md:inline ">Enviar</span>
          </button>
        </div>
      </div>
    </div>
  );
}
