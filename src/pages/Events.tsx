import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUsers, FiMessageSquare, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import weddingImg from '../assets/private wedding flowers.jpg';
import bridalImg from '../assets/bridal potraits.jpg';
import corporateImg from '../assets/cake flowers.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Events() {
  return (
    <div className="min-h-screen bg-primary-black text-white selection:bg-primary-gold selection:text-black">
      {/* Hero Section - Liquid Glass Style */}
      <section className="relative min-h-[90vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={weddingImg} 
            alt="Luxury Wedding" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl pt-24 sm:pt-20 md:pt-0 pb-20 sm:pb-0"
          >
            <span className="text-primary-gold uppercase tracking-[0.5em] sm:tracking-[0.6em] text-[9px] sm:text-[10px] md:text-[11px] font-black mb-4 sm:mb-6 md:mb-8 block text-center sm:text-left">Bespoke Curation</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight sm:leading-none mb-4 sm:mb-6 md:mb-8 tracking-tighter italic text-center sm:text-left">
              Artistry <br className="hidden sm:block" /> <span className="text-primary-pink">in Motion</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto sm:mx-0 leading-relaxed mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">
              From intimate soirées to grand gala celebrations, we transform spaces into living masterpieces through visionary floral design.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center sm:justify-start">
              <a href="#proposal" className="btn-primary px-6 sm:px-8 py-3 text-sm sm:text-base">Request Proposal</a>
              <button className="btn-outline px-6 sm:px-8 py-3 text-sm sm:text-base">View Portfolio</button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        >
          <div className="w-[1px] h-16 sm:h-20 bg-gradient-to-b from-primary-gold to-transparent" />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-48 bg-secondary-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20 md:mb-32">
            <motion.span {...fadeIn} className="text-primary-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] font-black mb-4 sm:mb-6 block">Our Expertise</motion.span>
            <motion.h2 {...fadeIn} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-6 sm:mb-8 italic">Curated Experiences</motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {[
              { 
                title: 'Weddings', 
                desc: 'A symphony of blooms for your most sacred union.', 
                img: bridalImg,
                tags: ['Full Curation', 'Bridal Party', 'Venue Design']
              },
              { 
                title: 'Corporate Galas', 
                desc: 'Elevating brand identity through sophisticated floral statements.', 
                img: corporateImg,
                tags: ['Product Launches', 'Charity Events', 'Office Spaces']
              },
              { 
                title: 'Private Dinners', 
                desc: 'Intimate arrangements for moments that demand perfection.', 
                img: weddingImg,
                tags: ['Birthdays', 'Anniversaries', 'Social Soirées']
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden mb-6 sm:mb-8">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 sm:duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4 italic">{service.title}</h3>
                <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest px-2 sm:px-3 py-1 border border-white/10 rounded-full text-gray-400">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section - The Process */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-48 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-start lg:items-center">
            <div className="w-full lg:w-1/2">
              <motion.div {...fadeIn}>
                <span className="text-primary-pink uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] font-black mb-4 sm:mb-6 block">The Journey</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-6 sm:mb-10 italic leading-tight">A Vision Brought <br className="hidden sm:block" /> to Bloom</h2>
                <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                  {[
                    { step: '01', title: 'Consultation', text: 'We meet to understand your vision, palette, and the emotional resonance of your event.' },
                    { step: '02', title: 'Creative Concept', text: 'Our artisans draft a bespoke design proposal including mood boards and floral selections.' },
                    { step: '03', title: 'The Execution', text: 'On the day, our team meticulously installs every arrangement, ensuring flawless beauty.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 sm:gap-6 lg:gap-8 group">
                      <span className="text-primary-gold font-serif text-xl sm:text-2xl md:text-3xl italic group-hover:translate-x-2 transition-transform">{item.step}</span>
                      <div>
                        <h4 className="text-sm sm:text-lg font-black uppercase tracking-widest mb-2">{item.title}</h4>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] sm:aspect-square bg-primary-gold/5 absolute -top-6 -left-6 w-full h-full rounded-full blur-2xl sm:blur-3xl -z-10" />
                <img src={bridalImg} alt="Floral Process" className="relative w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-xl sm:shadow-2xl rounded-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal Request Form */}
      <section id="proposal" className="py-20 sm:py-24 md:py-32 lg:py-48 bg-secondary-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
              <div className="w-full">
                <motion.div {...fadeIn}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 italic">Request a <br className="hidden sm:block" /> Proposal</h2>
                  <p className="text-gray-500 mb-6 sm:mb-10 lg:mb-12 text-sm sm:text-base leading-relaxed">
                    Ready to elevate your event? Provide us with the initial details of your vision, and our lead designer will reach out to schedule your private consultation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <FiCheckCircle className="text-primary-gold flex-shrink-0" size={14} />
                      <span>Complimentary Initial Consultation</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <FiCheckCircle className="text-primary-gold flex-shrink-0" size={14} />
                      <span>Bespoke Design Presentation</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <FiCheckCircle className="text-primary-gold flex-shrink-0" size={14} />
                      <span>Full Service Installation</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="w-full">
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 bg-primary-black/40 p-6 sm:p-8 lg:p-16 border border-white/5 backdrop-blur-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary-gold/5 blur-[80px] sm:blur-[120px] pointer-events-none" />
                  
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><FiUsers size={10} /> Full Identity</label>
                    <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white/10 px-0 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-primary-gold transition-colors text-white font-medium placeholder:text-gray-700" required />
                  </div>
                  
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><FiMessageSquare size={10} /> Digital Address</label>
                    <input type="email" placeholder="email@address.com" className="bg-transparent border-b border-white/10 px-0 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-primary-gold transition-colors text-white font-medium placeholder:text-gray-700" required />
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4">
                    <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><FiCalendar size={10} /> Event Date</label>
                    <input type="date" className="bg-transparent border-b border-white/10 px-0 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-primary-gold transition-colors text-white font-medium" required />
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4">
                    <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-500 flex items-center gap-2"><FiMapPin size={10} /> Venue Location</label>
                    <input type="text" placeholder="Nairobi or Elsewhere" className="bg-transparent border-b border-white/10 px-0 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-primary-gold transition-colors text-white font-medium placeholder:text-gray-700" required />
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2">
                    <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-500">Event Typology</label>
                    <select className="bg-transparent border-b border-white/10 px-0 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-primary-gold transition-colors text-white font-medium appearance-none cursor-pointer">
                      <option className="bg-primary-black">Luxury Wedding</option>
                      <option className="bg-primary-black">Corporate Gala</option>
                      <option className="bg-primary-black">Private Social Soirée</option>
                      <option className="bg-primary-black">Product Launch</option>
                      <option className="bg-primary-black">Other Exclusive Occasion</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2">
                    <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-gray-500">The Vision (Briefly)</label>
                    <textarea rows={3} placeholder="Describe the atmosphere you wish to create..." className="bg-transparent border-b border-white/10 px-0 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-primary-gold transition-colors text-white font-medium resize-none placeholder:text-gray-700" required></textarea>
                  </div>

                  <div className="sm:col-span-2 pt-6 sm:pt-10">
                    <button type="submit" className="btn-primary w-full py-4 sm:py-6 text-xs sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] flex items-center justify-center gap-2 sm:gap-3 group">
                      Send Proposal Request <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeIn}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic mb-6 sm:mb-8 md:mb-10">Follow Our Journey of Bloom</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              <a href="#" className="text-gray-500 hover:text-primary-gold transition-colors uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-primary-gold transition-colors uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black">Pinterest</a>
              <a href="#" className="text-gray-500 hover:text-primary-gold transition-colors uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] font-black">LinkedIn</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
