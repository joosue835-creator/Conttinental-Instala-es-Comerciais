export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'acougue' | 'padaria' | 'cozinha' | 'automacao' | 'refrigeracao';
  description: string;
  benefits: string[];
  applications: string;
  imageUrl: string;
  featured?: boolean;
}

export const CATEGORIES = [
  { id: 'acougue', name: 'Açougue', icon: 'Beef' },
  { id: 'padaria', name: 'Padaria', icon: 'Croissant' },
  { id: 'cozinha', name: 'Cozinha Industrial', icon: 'ChefHat' },
  { id: 'automacao', name: 'Automação Comercial', icon: 'MonitorSmartphone' },
  { id: 'refrigeracao', name: 'Refrigeração', icon: 'Snowflake' },
];

export const PRODUCTS: Product[] = [
  {
    id: "balcao-turino-gats",
    name: "Balcão Expositor Frigorífico Turino GATS",
    brand: "Gelopar",
    category: "acougue",
    description: "Expositor frigorífico ideal para carnes, com temperatura de 0°C a +7°C e vidro temperado.",
    benefits: ["Iluminação LED", "Tendal duplo com ganchos", "Degelo manual", "Alta durabilidade"],
    applications: "Açougues e casas de carnes.",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "moedor-bermar-22",
    name: "Moedor de Carne Boca 22",
    brand: "Bermar",
    category: "acougue",
    description: "Moedor de carne profissional de alta capacidade para uso contínuo.",
    benefits: ["Motor potente", "Fácil higienização", "Estrutura robusta"],
    applications: "Açougues de médio e grande porte.",
    imageUrl: "https://images.unsplash.com/photo-1607006411021-b4a629f644e5?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "moedor-bermar-98",
    name: "Moedor de Carne Boca 98 Trifásico",
    brand: "Bermar",
    category: "acougue",
    description: "Equipamento industrial trifásico para moagem de grandes volumes de carne.",
    benefits: ["Alta produtividade", "Motor trifásico", "Corte preciso"],
    applications: "Frigoríficos e grandes açougues.",
    imageUrl: "https://images.unsplash.com/photo-1585237832863-7182281146c3?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "ensacadeira-brimac-5-10",
    name: "Ensacadeira Manual 5/10kg",
    brand: "Brimac",
    category: "acougue",
    description: "Ensacadeira manual em inox com 4 tubos e 2 velocidades.",
    benefits: ["Estrutura em inox", "2 velocidades", "Acompanha 4 tubos"],
    applications: "Produção de embutidos e linguiças.",
    imageUrl: "https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "serra-fita-skymsen",
    name: "Serra Fita para Carnes e Ossos",
    brand: "Skymsen",
    category: "acougue",
    description: "Serra fita profissional de alta precisão e segurança para cortes de carnes com osso.",
    benefits: ["Corte preciso", "Sistema de segurança", "Fácil limpeza"],
    applications: "Açougues e peixarias.",
    imageUrl: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "amassadeira-espiral-grano",
    name: "Amassadeira Espiral",
    brand: "Grano",
    category: "padaria",
    description: "Amassadeira espiral de alta performance para massas pesadas.",
    benefits: ["Mistura homogênea", "Alta durabilidade", "Diversas capacidades"],
    applications: "Padarias, pizzarias e confeitarias.",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "kit-churrasco-original-line",
    name: "Kit Churrasco 3 peças",
    brand: "Original Line",
    category: "cozinha",
    description: "Kit completo com garfo trinchante 5\", chaira 7\" e faca 7\".",
    benefits: ["Lâminas em inox", "Cabos resistentes", "Fio duradouro"],
    applications: "Uso profissional e doméstico.",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "jogo-facas-tramontina",
    name: "Jogo de Facas Plenus 6 peças",
    brand: "Tramontina",
    category: "cozinha",
    description: "Jogo de facas com cabo preto e lâmina inox, pode ir à máquina de lavar louças.",
    benefits: ["Lâminas com tratamento térmico", "Cabos de polipropileno", "Resistentes à máquina de lavar"],
    applications: "Cozinhas industriais e restaurantes.",
    imageUrl: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "chaleira-eletrica-agratto",
    name: "Chaleira Elétrica",
    brand: "Agratto",
    category: "cozinha",
    description: "Chaleira elétrica rápida e prática para aquecimento de água.",
    benefits: ["Aquecimento rápido", "Desligamento automático", "Jarra em inox"],
    applications: "Cozinhas, copas e escritórios.",
    imageUrl: "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "balcao-expositor-refrimate",
    name: "Balcão Expositor de Carnes",
    brand: "Refrimate",
    category: "refrigeracao",
    description: "Linha premium para exposição de carnes com seção de pesagem integrada.",
    benefits: ["Design moderno", "Refrigeração eficiente", "Seção de pesagem"],
    applications: "Açougues e supermercados.",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: "fogoes-progas",
    name: "Fogão Industrial a Gás",
    brand: "Progás / Braesi",
    category: "cozinha",
    description: "Fogões industriais robustos para alta demanda.",
    benefits: ["Grelhas em ferro fundido", "Queimadores duplos", "Estrutura reforçada"],
    applications: "Restaurantes e cozinhas industriais.",
    imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800",
    featured: false,
  }
];
