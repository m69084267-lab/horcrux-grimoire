import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
          
          <p className="text-2xl text-gray-300 mb-2">
            دنیای جادویی هری پاتر
          </p>

          {/* Creator Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gold-400 font-bold mb-8"
          >
            ✨ ساخته‌شده توسط: <span className="text-gold-300">iman</span>
          </motion.p>

          <div className="flex gap-6 justify-center">
            <Link to="/characters">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                شخصیت‌ها را بشناسید
              </motion.button>
            </Link>
            <Link to="/game">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                بازی شروع کنید
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={itemVariants} className="py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold glow-text text-center mb-12"
        >
          ویژگی‌های شگفت‌انگیز
        </motion.h2>
        
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

      {/* Creator Spotlight */}
      <motion.section
        variants={itemVariants}
        className="card-dark p-12 rounded-xl text-center mb-12"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl mb-6"
        >
          👨‍💻
        </motion.div>
        <h3 className="text-3xl font-bold glow-text mb-4">پروژه شخصی iman</h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          این پروژه با تمام تلاش و خلاقیت توسط <span className="text-gold-400 font-bold">iman</span> ساخته شده است. 
          یک وب‌اپ حرفه‌ای، جذاب و شاهکار از دنیای هری پاتر 🪄✨
        </p>
      </motion.section>
    </motion.div>
  )
}

export default Home