import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '@/store/gameStore'
import { horcruxes } from '@/data/horcruxes'

const HorcruxGame: React.FC = () => {
  const gameState = useGameStore()
  const [shuffledHorcruxes, setShuffledHorcruxes] = useState(horcruxes.sort(() => Math.random() - 0.5))
  const [selectedHorcruxes, setSelectedHorcruxes] = useState<Set<string>>(new Set())
  const [gameMessage, setGameMessage] = useState('هورکراکس‌ها را پیدا کنید!')
  const [showWinAnimation, setShowWinAnimation] = useState(false)

  const handleSelectHorcrux = (horcruxId: string) => {
    if (selectedHorcruxes.has(horcruxId)) return

    const newSelected = new Set(selectedHorcruxes)
    newSelected.add(horcruxId)
    setSelectedHorcruxes(newSelected)

    gameState.addHorcrux(horcruxId)
    setGameMessage(`پیدا کردید! ${horcruxId} را یافتید!`)

    if (newSelected.size === horcruxes.length) {
      setShowWinAnimation(true)
      setGameMessage('تبریک! تمام هورکراکس‌ها را پیدا کردید!')
    }
  }

  const resetGame = () => {
    gameState.resetGame()
    setSelectedHorcruxes(new Set())
    setGameMessage('هورکراکس‌ها را پیدا کنید!')
    setShowWinAnimation(false)
    setShuffledHorcruxes(horcruxes.sort(() => Math.random() - 0.5))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="page-transition py-12"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold glow-text mb-4">🎮 شکار هورکراکس</h1>
        <p className="text-xl text-gray-300 mb-8">تمام هورکراکس‌ها را پیدا کنید و ولدمورت را شکست دهید!</p>

        {/* Game Stats */}
        <div className="flex justify-center gap-8 mb-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="card-dark px-8 py-4"
          >
            <p className="text-gold-400 font-bold text-sm mb-2">امتیاز</p>
            <p className="text-3xl font-bold">{gameState.score}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="card-dark px-8 py-4"
          >
            <p className="text-gold-400 font-bold text-sm mb-2">یافت شده</p>
            <p className="text-3xl font-bold">{gameState.foundHorcruxes.length}/{horcruxes.length}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="card-dark px-8 py-4"
          >
            <p className="text-gold-400 font-bold text-sm mb-2">جان</p>
            <p className="text-3xl font-bold">{gameState.lives}</p>
          </motion.div>
        </div>

        {/* Game Message */}
        <motion.p
          key={gameMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl text-gold-400 font-bold"
        >
          {gameMessage}
        </motion.p>
      </motion.div>

      {/* Horcrux Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
      >
        <AnimatePresence>
          {shuffledHorcruxes.map((horcrux) => {
            const isFound = selectedHorcruxes.has(horcrux.id)
            return (
              <motion.div
                key={horcrux.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => handleSelectHorcrux(horcrux.id)}
                  disabled={isFound}
                  whileHover={!isFound ? { scale: 1.05, y: -5 } : {}}
                  whileTap={!isFound ? { scale: 0.95 } : {}}
                  className={`w-full h-40 rounded-lg font-bold text-2xl transition-all duration-300 ${
                    isFound
                      ? 'bg-gradient-to-br from-gold-500 to-gold-400 text-dark-950 shadow-glow-gold'
                      : 'card-dark text-gold-400 hover:shadow-glow-purple'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <span className="text-4xl">{horcrux.emoji}</span>
                    {isFound && <span className="text-sm">✓ یافت شد</span>}
                  </div>
                </motion.button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Win Animation */}
      <AnimatePresence>
        {showWinAnimation && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          >
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-8xl mb-8"
              >
                🎉
              </motion.div>
              <h2 className="text-5xl font-bold glow-text mb-8">پیروزی!</h2>
              <p className="text-2xl text-gray-300 mb-8">تمام هورکراکس‌ها را شکست دادید!</p>
              <button
                onClick={resetGame}
                className="btn-primary text-lg px-8 py-4"
              >
                دوباره بازی کنید
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="card-dark p-8 rounded-xl"
      >
        <h3 className="text-2xl font-bold glow-text mb-4">📖 نحوه بازی</h3>
        <ul className="space-y-3 text-gray-300">
          <li>✨ روی هورکراکس کلیک کنید تا آن‌ها را کشف کنید</li>
          <li>🎯 تمام هورکراکس‌ها را پیدا کنید تا بازی را برنده شوید</li>
          <li>⭐ هر هورکراکس 100 امتیاز می‌دهد</li>
          <li>🏆 می‌توانید بازی را بارها تکرار کنید</li>
        </ul>
      </motion.section>
    </motion.div>
  )
}

export default HorcruxGame