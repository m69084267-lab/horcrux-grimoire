import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="bg-dark-900 border-t border-gold-500 border-opacity-30 mt-12"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-3 gap-8 text-center mb-8">
          <div>
            <h3 className="glow-text text-lg font-bold mb-2">درباره</h3>
            <p className="text-gray-400 text-sm">دنیای جادویی هری پاتر</p>
          </div>
          <div>
            <h3 className="glow-text text-lg font-bold mb-2">لینک‌ها</h3>
            <p className="text-gray-400 text-sm">منابع و اطلاعات</p>
          </div>
          <div>
            <h3 className="glow-text text-lg font-bold mb-2">تماس</h3>
            <p className="text-gray-400 text-sm">Horcrux Grimoire © 2026</p>
          </div>
        </div>

        {/* Creator Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-8 border-t border-gold-500 border-opacity-30 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <p className="text-sm text-gray-400 mb-2">
              ✨ ساخته شده توسط
            </p>
            <h3 className="text-3xl font-bold glow-text mb-3">
              iman
            </h3>
            <div className="flex justify-center gap-4 text-xs text-gray-500">
              <span>🪄 Horcrux Grimoire</span>
              <span>•</span>
              <span>✨ 2026</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer