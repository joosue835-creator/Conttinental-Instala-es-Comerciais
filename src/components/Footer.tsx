import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight tracking-tight">CONTTINENTAL</span>
                <span className="text-gray-400 text-xs uppercase tracking-widest">Instalações Comerciais</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Equipamentos, produtos e serviços de alta performance para alimentação e refrigeração comercial.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Início</Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-white transition-colors text-sm">Produtos</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors text-sm">Sobre a Empresa</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors text-sm">Contato</Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">Política de Privacidade</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>{COMPANY_INFO.phone1}</span>
                  <span>{COMPANY_INFO.phone2}</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Atendimento</h3>
            <p className="text-gray-400 text-sm mb-4">
              Segunda a Sexta: 08h às 18h<br />
              Sábado: 08h às 13h
            </p>
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultor)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2.5 rounded-md border border-white/10 transition-colors text-sm font-medium"
            >
              Falar com Consultor
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Desenvolvido com excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
