import { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Instagram, Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessType: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}.\n` +
                 `Tipo de negócio: ${formData.businessType}\n` +
                 `Mensagem: ${formData.message}`;
    
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-20"
    >
      <Helmet>
        <title>Contato | Conttinental Instalações Comerciais</title>
        <meta name="description" content="Fale com nossos especialistas e solicite um orçamento para equipamentos comerciais em Anápolis." />
      </Helmet>

      {/* Header */}
      <section className="bg-dark-surface py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contato e Orçamento</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Fale com nossos especialistas e encontre a solução ideal para o seu negócio.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-dark-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Solicite um Orçamento</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark-surface border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-dark-surface border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">Tipo de Negócio</label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-dark-surface border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="Açougue">Açougue</option>
                    <option value="Padaria">Padaria</option>
                    <option value="Restaurante">Restaurante</option>
                    <option value="Cozinha Industrial">Cozinha Industrial</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem / Dúvida</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-dark-surface border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-red-700 text-white px-6 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(198,40,40,0.4)] hover:shadow-[0_0_30px_rgba(198,40,40,0.6)]"
                >
                  Enviar para WhatsApp
                  <Send size={20} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Telefones</h4>
                      <p className="text-gray-400">{COMPANY_INFO.phone1}</p>
                      <p className="text-gray-400">{COMPANY_INFO.phone2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center text-[#25D366] shrink-0">
                      <Send size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">WhatsApp</h4>
                      <a href={getWhatsAppUrl('')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        {COMPANY_INFO.phone1}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 shrink-0">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Instagram</h4>
                      <a href={COMPANY_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        {COMPANY_INFO.instagram}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Endereço</h4>
                      <p className="text-gray-400">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Horário de Atendimento</h2>
                <div className="glass-card p-6 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Segunda a Sexta</span>
                    <span className="text-white font-bold">08h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">Sábado</span>
                    <span className="text-white font-bold">08h às 13h</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Localização</h2>
                <div className="rounded-2xl overflow-hidden glass-card p-2 aspect-video relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.776646506307!2d-48.9723238!3d-16.3346549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ea4f8f8f8f8f8%3A0x8f8f8f8f8f8f8f8f!2sAv.%20Juscelino%20Kubitscheck%2C%201650%20-%20Vila%20Industrial%2C%20An%C3%A1polis%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Conttinental"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
