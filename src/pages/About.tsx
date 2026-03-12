import { ArrowRight, Target, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/constants';

export default function About() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-20"
    >
      <Helmet>
        <title>Sobre Nós | Conttinental Instalações Comerciais</title>
        <meta name="description" content="Conheça a história e a missão da Conttinental Instalações Comerciais, sua parceira em equipamentos para o setor alimentício." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
            alt="Nossa História"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Nossa História
            </h1>
            <div className="w-20 h-1 bg-secondary rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              A <span className="text-white font-bold">Conttinental Instalações Comerciais</span> nasceu com a missão de facilitar a vida de quem empreende no setor alimentício em Anápolis e região.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-dark-surface relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-secondary">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="text-secondary" size={28} />
                  Nossa Missão
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Oferecer equipamentos de alta qualidade e atendimento consultivo especializado, ajudando cada empresário a montar, reformar ou modernizar seu negócio com segurança e eficiência.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-primary" size={28} />
                  Nosso Compromisso
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Cada cliente recebe orientação personalizada. Não vendemos produto — entregamos solução. Com mais de cinco anos de experiência, crescemos construindo relações de confiança, sendo consultores, não apenas fornecedores.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=800"
                  alt="Equipe Conttinental"
                  className="w-full h-full object-cover rounded-xl opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-xl shadow-2xl border border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-2xl leading-tight">130k+</p>
                  <p className="text-gray-400 text-sm">Seguidores no Instagram</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feiras e Eventos */}
      <section className="py-24 bg-dark-base relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Presença Constante</h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            Participamos ativamente das maiores feiras do setor, como a <span className="text-white font-bold">Fispal Food Service</span>, para trazer sempre as melhores inovações e tecnologias para o seu negócio.
          </p>
          
          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultor)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(198,40,40,0.4)] hover:shadow-[0_0_30px_rgba(198,40,40,0.6)] hover:scale-105"
          >
            Fale com um Consultor
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </motion.main>
  );
}
