export const COMPANY_INFO = {
  name: "Conttinental Instalações Comerciais",
  phone1: "(62) 3316-3070",
  phone2: "(62) 3321-0262",
  whatsapp: "556233163070",
  instagram: "@conttinentalinstalacoes",
  instagramUrl: "https://instagram.com/conttinentalinstalacoes",
  address: "Av. Juscelino Kubitscheck, nº 1650 – QD 27 LT 11 – Vila Industrial, Anápolis – GO",
  googleRating: "4,8",
  googleReviews: "42",
  experience: "Mais de 5 anos",
  email: "contato@conttinental.com.br", // Placeholder
};

export const WHATSAPP_MESSAGES = {
  general: "Olá! Gostaria de solicitar um orçamento.",
  acougue: "Olá! Tenho interesse em equipamentos para açougue. Podem me ajudar?",
  padaria: "Olá! Preciso de equipamentos para padaria. Gostaria de um orçamento.",
  cozinha: "Olá! Tenho interesse em equipamentos para cozinha industrial. Podem me ajudar?",
  automacao: "Olá! Tenho interesse em soluções de automação comercial. Podem me ajudar?",
  consultor: "Olá! Gostaria de falar com um consultor de vendas.",
  product: (productName: string) => `Olá! Tenho interesse no produto ${productName}. Gostaria de um orçamento.`,
};

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
};
