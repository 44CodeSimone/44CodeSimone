const chat = document.getElementById('chat');
const form = document.getElementById('chat-form');
const input = document.getElementById('message');
const quickButtons = document.querySelectorAll('[data-prompt]');

const services = [
  'Criação de sites institucionais e landing pages',
  'Desenvolvimento de sistemas web sob demanda',
  'Automação de processos com IA e integração de APIs',
  'Suporte técnico, manutenção e melhorias contínuas',
  'Consultoria em segurança e organização de TI'
];

const budgetFlow = [
  '1) Você descreve sua necessidade e objetivo de negócio.',
  '2) A 44 Code analisa o escopo e envia proposta com prazo e investimento.',
  '3) Após aprovação, começamos o desenvolvimento com checkpoints semanais.'
];

const context = {
  name: '',
  company: '',
  need: ''
};

const addMessage = (author, text) => {
  const bubble = document.createElement('article');
  bubble.className = `message ${author}`;
  bubble.textContent = text;
  chat.appendChild(bubble);
  chat.scrollTop = chat.scrollHeight;
};

const greet = () => {
  addMessage(
    'bot',
    'Olá! 👋 Eu sou a atendente virtual da 44 Code Soluções em Tecnologia. Posso ajudar com serviços, orçamento, suporte e próximos passos do seu projeto.'
  );
};

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const detectIntent = (message) => {
  const normalized = normalize(message);

  if (normalized.includes('servico') || normalized.includes('fazem') || normalized.includes('oferece')) {
    return 'services';
  }

  if (normalized.includes('orcamento') || normalized.includes('preco') || normalized.includes('valor')) {
    return 'budget';
  }

  if (normalized.includes('suporte') || normalized.includes('manutencao') || normalized.includes('problema')) {
    return 'support';
  }

  if (normalized.includes('seguranca') || normalized.includes('ciberseguranca')) {
    return 'security';
  }

  if (normalized.includes('nome')) {
    return 'capture-name';
  }

  if (normalized.includes('empresa')) {
    return 'capture-company';
  }

  if (normalized.includes('site') || normalized.includes('sistema') || normalized.includes('aplicacao')) {
    return 'project';
  }

  return 'fallback';
};

const respond = (message) => {
  const intent = detectIntent(message);

  switch (intent) {
    case 'services':
      return `Claro! A 44 Code pode apoiar com:\n\n- ${services.join('\n- ')}\n\nSe quiser, posso te ajudar a escolher o melhor formato para o seu projeto.`;

    case 'budget':
      return `Perfeito! O orçamento funciona assim:\n\n${budgetFlow.join('\n')}\n\nSe preferir, me diga seu objetivo e eu já te ajudo a montar o briefing inicial.`;

    case 'support':
      return 'Sim! Oferecemos suporte e manutenção contínua para sistemas e sites. Podemos atuar de forma preventiva (monitoramento e atualizações) e corretiva (resolução de falhas).';

    case 'security':
      return 'A 44 Code também pode apoiar com boas práticas de segurança: revisão de permissões, fortalecimento de autenticação, backup e orientação para reduzir riscos.';

    case 'capture-name':
      context.name = message.replace(/.*nome\s*[:\-]?\s*/i, '').trim();
      return context.name
        ? `Prazer, ${context.name}! Se quiser, posso registrar também o nome da sua empresa e o tipo de solução que você precisa.`
        : 'Posso anotar seu nome para personalizar o atendimento. Exemplo: "Meu nome é Carla".';

    case 'capture-company':
      context.company = message.replace(/.*empresa\s*[:\-]?\s*/i, '').trim();
      return context.company
        ? `Ótimo, empresa registrada: ${context.company}. Agora me conte qual o principal desafio que vocês querem resolver.`
        : 'Perfeito! Qual é o nome da empresa?';

    case 'project':
      context.need = message;
      return 'Entendi seu projeto! Recomendo começarmos com um diagnóstico rápido para validar escopo, integrações e prazo. Posso estruturar um resumo para envio ao time comercial da 44 Code.';

    default:
      return 'Posso te ajudar com: serviços, orçamento, suporte, segurança e escopo de projeto. Se quiser, comece dizendo: "Quero um orçamento para..."';
  }
};

const simulateTyping = (answer) => {
  const typing = document.createElement('article');
  typing.className = 'message bot';
  typing.textContent = 'Digitando...';
  chat.appendChild(typing);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    typing.remove();
    addMessage('bot', answer);
  }, 550);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = input.value.trim();

  if (!message) {
    return;
  }

  addMessage('user', message);
  input.value = '';

  const answer = respond(message);
  simulateTyping(answer);
});

quickButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const prompt = button.dataset.prompt;
    input.value = prompt;
    form.requestSubmit();
  });
});

greet();
