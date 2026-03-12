import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Product } from '../data/products';
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '../data/constants';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'acougue': return 'bg-red-900/40 text-red-400 border-red-900/50';
      case 'padaria': return 'bg-amber-900/40 text-amber-400 border-amber-900/50';
      case 'cozinha': return 'bg-blue-900/40 text-blue-400 border-blue-900/50';
      case 'automacao': return 'bg-emerald-900/40 text-emerald-400 border-emerald-900/50';
      case 'refrigeracao': return 'bg-cyan-900/40 text-cyan-400 border-cyan-900/50';
      default: return 'bg-gray-800 text-gray-300 border-gray-700';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'acougue': return 'Açougue';
      case 'padaria': return 'Padaria';
      case 'cozinha': return 'Cozinha Industrial';
      case 'automacao': return 'Automação';
      case 'refrigeracao': return 'Refrigeração';
      default: return category;
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden hover-steel-glow transition-all duration-300 flex flex-col h-full group">
      <div className="relative aspect-video overflow-hidden bg-gray-900">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getCategoryColor(product.category)}`}>
            {getCategoryName(product.category)}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-gray-300 border border-white/10">
          {product.brand}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto space-y-4">
          <ul className="space-y-2">
            {product.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-4 border-t border-white/10">
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.product(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-secondary text-white px-4 py-2.5 rounded-md font-medium transition-all border border-white/10 hover:border-secondary"
            >
              Solicitar Orçamento
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
