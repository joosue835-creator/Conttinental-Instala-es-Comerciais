import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
      className="flex-grow pt-20"
    >
      <Helmet>
        <title>Produtos | Conttinental Instalações Comerciais</title>
        <meta name="description" content="Catálogo completo de equipamentos para açougues, padarias, cozinhas industriais e refrigeração comercial." />
      </Helmet>

      {/* Header */}
      <section className="bg-dark-surface py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Catálogo de Produtos</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Soluções completas e equipamentos de alta performance para o seu negócio.
          </p>
        </motion.div>
      </section>

      {/* Categories Navigation */}
      <section className="bg-dark-base sticky top-20 z-40 border-b border-white/5 shadow-lg shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap px-6 py-2 rounded-full glass-card text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="bg-dark-base py-12 space-y-24">
        {CATEGORIES.map((category) => {
          const categoryProducts = PRODUCTS.filter(p => p.category === category.id);
          
          if (categoryProducts.length === 0) return null;

          return (
            <section key={category.id} id={category.id} className="scroll-mt-40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-8"
                >
                  <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                  <div className="h-px bg-white/10 flex-grow"></div>
                </motion.div>
                
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {categoryProducts.map((product) => (
                    <motion.div key={product.id} variants={itemVariants}>
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          );
        })}
      </div>
    </motion.main>
  );
}
