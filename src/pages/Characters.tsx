import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { characters } from '@/data/characters'

const Characters: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-transition py-12"
    >
      <motion.h1 variants={itemVariants} className="text-5xl font-bold glow-text mb-12 text-center">
        شخصیت‌های جادویی
      </motion.h1>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {characters.map((char) => (
          <motion.div key={char.id} variants={itemVariants}>
            <Link to={`/character/${char.id}`}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`card-dark p-6 cursor-pointer overflow-hidden group`}
              >
                <div className={`bg-gradient-to-br ${char.theme.bgColor} h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden`}>
                  <motion.img
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{char.name}</h2>
                <h3 className={`text-xl font-bold mb-3 ${char.theme.accentColor}`}>
                  {char.faName}
                </h3>
                <p className="text-gray-400 mb-4">{char.role}</p>
                
                {char.house && (
                  <div className="inline-block px-3 py-1 border border-gold-500 rounded text-gold-400 text-sm">
                    {char.house}
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="mt-4 text-gold-400 font-bold"
                >
                  جزئیات بیشتر →
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Characters