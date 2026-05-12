import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import collectionImg from '../assets/private wedding flowers.jpg';

export default function PromoBanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden group">
      <motion.div 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-fixed bg-center transition-transform duration-[3s] group-hover:scale-105" 
        style={{ backgroundImage: `url('${collectionImg}')` }}
      ></motion.div>
      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl text-right"
        >
          <span className="text-primary-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Premium Selection</span>
          <h2 className="text-4xl sm:text-6xl font-serif mb-8 text-white leading-tight uppercase tracking-wider">The Royal Gala Collection</h2>
          <p className="text-lg text-gray-300 mb-12 italic leading-relaxed">
            "Experience the pinnacle of floral artistry. Our bespoke Gala arrangements are curated for those who seek the extraordinary in every petal."
          </p>
          <div className="flex justify-end gap-6">
            <Link to="/shop?category=luxury" className="btn-primary">Explore Masterpieces</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
