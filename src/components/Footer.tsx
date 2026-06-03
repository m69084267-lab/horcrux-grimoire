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
        <div className="grid grid-cols-3 gap-8 text-center">
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
      </div>
    </motion.footer>
  )
}

export default Footer