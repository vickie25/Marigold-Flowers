import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Tooltip / Message */}
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                className="bg-white text-black px-6 py-3 rounded-2xl shadow-2xl border border-primary-gold/20 mb-2 relative"
              >
                <p className="text-[11px] font-black uppercase tracking-widest leading-none">
                  🌸 Need help with your order?
                </p>
                <div className="absolute right-6 -bottom-2 w-4 h-4 bg-white rotate-45 border-r border-b border-primary-gold/10" />
              </motion.div>
            )}

            {/* Main FAB */}
            <motion.a
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Outer Pulse Rings */}
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 scale-150" />
              <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-10 scale-[2] delay-300" />
              
              {/* Main Button */}
              <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all duration-500 overflow-hidden">
                <FiMessageCircle size={32} className="relative z-10 sm:scale-125" />
                
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary-pink rounded-full border-2 border-primary-black animate-bounce shadow-lg" />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
