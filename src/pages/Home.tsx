import { ArrowRight, CheckCircle2, Star, Beef, Croissant, ChefHat, MonitorSmartphone, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/constants';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 6);

  const segments = [
    {
      id: 'acougue',
      title: 'Para seu Açougue',
      description: 'Equipamentos de corte, moagem, exposição e refrigeração de carnes.',
      icon: Beef,
      link: '/produtos#acougue',
      color: 'text-red-500',
      bg: 'bg-red-500/10',
    },
    {
      id: 'padaria',
      title: 'Para sua Padaria',
      description: 'Soluções completas de produção, forno e exposição para panificação.',
      icon: Croissant,
      link: '/produtos#padaria',
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
    },
    {
      id: 'cozinha',
      title: 'Cozinha Industrial',
      description: 'Alta performance para restaurantes, lanchonetes e cozinhas profissionais.',
      icon: ChefHat,
      link: '/produtos#cozinha',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      id: 'automacao',
      title: 'Automação Comercial',
      description: 'Tecnologia que aumenta produtividade e reduz custos operacionais.',
      icon: MonitorSmartphone,
      link: '/produtos#automacao',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
    },
  ];

  const differentials = [
    {
      title: 'Atendimento consultivo especializado',
      description: 'Nossos consultores entendem o seu negócio e indicam a solução certa.',
    },
    {
      title: 'Equipamentos das melhores marcas',
      description: 'Trabalhamos com Bermar, Skymsen, Gelopar, Tramontina, Grano, Refrimate, Fricon, Gural, Progás/Braesi e muito mais.',
    },
    {
      title: 'Alta durabilidade e desempenho',
      description: 'Produtos profissionais para uso intensivo no dia a dia.',
    },
    {
      title: 'Soluções completas',
      description: 'Do utensílio básico à automação total do seu estabelecimento.',
    },
  ];

  const brands = [
    'Bermar', 'Skymsen', 'Gelopar', 'Tramontina', 'Grano', 'Refrimate', 
    'Fricon', 'Gural', 'Progás', 'Braesi', 'Imeca', 'Brimac', 'Agratto', 
    'Clink', 'Original Line', 'Mundial'
  ];

  const testimonials = [
    {
      name: 'Leo G.',
      text: 'Sempre muito bem atendido! Neste momento pelo Lucivan.',
      rating: 5,
    },
    {
      name: 'Maria Aparecida Aleixo',
      text: 'Para mim foi muito o que eu já tinha rodado por toda a cidade — só na Conttinental encontrei produtos de boa qualidade e o atendimento foi super bom.',
      rating: 5,
    },
    {
      name: 'Elaine Ruth',
      text: 'Gostei do forno e a batedeira planetária maravilhosa.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      <Helmet>
        <title>Conttinental Instalações Comerciais | Equipamentos para Alimentação</title>
        <meta name="description" content="Equipamentos, produtos e serviços de alta performance para o setor alimentício e refrigeração comercial em Anápolis e região." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585237832863-7182281146c3?auto=format&fit=crop&q=80&w=1920"
            alt="Equipamentos Profissionais"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Especialistas em Instalações Comerciais
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Equipe seu negócio com equipamentos profissionais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-red-400">alto desempenho</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Da cozinha ao maquinário pesado, a Conttinental fornece soluções completas para quem quer montar ou modernizar seu negócio alimentício.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,40,40,0.4)] hover:shadow-[0_0_30px_rgba(198,40,40,0.6)]"
              >
                Solicitar Orçamento Exclusivo
                <ArrowRight size={20} />
              </a>
              <a
                href="#segmentos"
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-white/20"
              >
                Explorar Linha de Produtos
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segments Section */}
      <section id="segmentos" className="py-24 bg-dark-surface relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Soluções para o seu tipo de negócio</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {segments.map((segment) => (
              <motion.div key={segment.id} variants={itemVariants} className="glass-card p-8 rounded-2xl hover-steel-glow transition-all duration-300 group flex flex-col h-full">
                <div className={`w-16 h-16 rounded-xl ${segment.bg} ${segment.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <segment.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{segment.title}</h3>
                <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">{segment.description}</p>
                <Link
                  to={segment.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-secondary transition-colors mt-auto"
                >
                  Ver Equipamentos
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-dark-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Equipamentos que fazem seu negócio funcionar</h2>
              <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
              <p className="text-gray-400 text-lg">Seleção premium das melhores marcas para garantir a produtividade e qualidade do seu estabelecimento.</p>
            </div>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 text-secondary hover:text-red-400 font-semibold transition-colors whitespace-nowrap"
            >
              Ver Catálogo Completo
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-dark-surface relative border-y border-white/5 overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Quem escolhe a Conttinental escolhe resultado</h2>
              <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Nossa experiência no mercado nos permite oferecer não apenas produtos, mas soluções completas que otimizam sua operação e aumentam sua lucratividade.
              </p>
              
              <div className="space-y-6">
                {differentials.map((diff, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{diff.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{diff.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                  alt="Atendimento Especializado" 
                  className="w-full h-full object-cover rounded-xl opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-2xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  +5
                </div>
                <div>
                  <p className="text-white font-bold leading-tight">Anos de<br/>Experiência</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-dark-base border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trabalhamos com as melhores marcas do mercado</p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">
            {brands.map((brand, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 uppercase tracking-wider hover:text-white transition-colors cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-dark-surface relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O que nossos clientes dizem</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-white font-bold">{COMPANY_INFO.googleRating} no Google</span>
              <span className="text-gray-400 text-sm">— {COMPANY_INFO.googleReviews} avaliações</span>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants} className="glass-card p-8 rounded-2xl relative">
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold border border-white/10">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">Cliente Verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Pronto para equipar ou modernizar seu negócio?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
            Fale com um consultor e receba uma orientação personalizada — sem compromisso.
          </p>
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultor)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(198,40,40,0.4)] hover:shadow-[0_0_30px_rgba(198,40,40,0.6)] hover:scale-105"
          >
            Falar com um Consultor de Vendas
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </motion.main>
  );
}
