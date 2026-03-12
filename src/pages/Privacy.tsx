import { COMPANY_INFO } from '../data/constants';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-20"
    >
      <Helmet>
        <title>Política de Privacidade | Conttinental Instalações Comerciais</title>
        <meta name="description" content="Política de privacidade e proteção de dados da Conttinental Instalações Comerciais." />
      </Helmet>

      <section className="py-24 bg-dark-base relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-extrabold text-white mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <p>
              A <strong>{COMPANY_INFO.name}</strong> valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos as informações que você nos fornece.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Dados Coletados</h2>
              <p>
                Coletamos apenas as informações necessárias para estabelecer contato comercial e fornecer orçamentos. Os dados coletados através dos nossos formulários incluem:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Nome completo</li>
                <li>Número de WhatsApp / Telefone</li>
                <li>Tipo de negócio</li>
                <li>Mensagens ou dúvidas enviadas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Uso das Informações</h2>
              <p>
                Os dados coletados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Responder a solicitações de orçamento</li>
                <li>Fornecer informações sobre produtos e serviços</li>
                <li>Contato comercial direto via WhatsApp ou telefone</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Compartilhamento de Dados</h2>
              <p>
                Garantimos que as suas informações pessoais <strong>não são vendidas, alugadas ou compartilhadas com terceiros</strong> para fins de marketing. Os dados são de uso exclusivo da {COMPANY_INFO.name}.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Conformidade com a LGPD</h2>
              <p>
                Nossa política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Você tem o direito de solicitar a exclusão, alteração ou acesso aos seus dados a qualquer momento.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contato</h2>
              <p>
                Para solicitações relacionadas à privacidade ou aos seus dados pessoais, entre em contato conosco através dos seguintes canais:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>WhatsApp: {COMPANY_INFO.phone1}</li>
                <li>E-mail: {COMPANY_INFO.email}</li>
              </ul>
            </div>
            
            <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </div>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
