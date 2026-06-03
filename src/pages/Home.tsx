import React from 'react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-transition"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-950" />
        
        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-96 h-96 bg-gold-500 rounded-full blur-3xl opacity-10"
        />

        <div className="relative z-10 text-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-7xl mb-6"
          >
            🪄
          </motion.div>
          
          <h1 className="text-6xl font-bold mb-4 glow-text">
            Horcrux Grimoire
          </h1>
          
          <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            دنیای جادویی هری پاتر را کشف کنید
          </p>

          <div className="flex gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              شخصیت‌ها را بشناسید
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              بازی شروع کنید
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={itemVariants} className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🎭', title: 'شخصیت‌ها', desc: 'شخصیت‌های فیلم را بشناسید' },
            { icon: '🎮', title: 'بازی', desc: 'بازی تفاعلی و جذاب' },
            { icon: '✨', title: 'انیمیشن', desc: 'جلوه‌های بصری شگفت‌انگیز' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="card-dark p-8 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2 glow-text">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Home