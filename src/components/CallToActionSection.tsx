import { motion } from 'framer-motion';

function CallToActionSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        y: { repeat: Infinity, repeatType: 'reverse', duration: 2, ease: 'easeInOut' },
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
    pulse: {
      scale: [1, 1.03, 1],
      transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
    },
  };

  return (
    <section className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <div className="relative h-96 bg-gradient-to-r from-emerald-800 to-teal-700">
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 gap-1 h-full">
                {Array(12).fill(0).map((_, i) => (
                  <div key={i} className="bg-white opacity-10"></div>
                ))}
              </div>
            </div>
            <motion.div
              className="absolute top-8 left-8"
              variants={floatVariants}
              animate="animate"
            >
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg"></div>
            </motion.div>
            <motion.div
              className="absolute bottom-12 right-12"
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full"></div>
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-8"
              variants={floatVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-4 h-4 bg-white bg-opacity-20 rounded"></div>
            </motion.div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
              <motion.div className="mb-8" variants={buttonVariants} animate="pulse">
                <motion.button
                  className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get Started Today
                </motion.button>
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Elevate Your Bathroom<br />With Livora
              </motion.h3>
              <motion.p
                className="text-white text-opacity-90 mb-8 max-w-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Contact us to discover our premium ceramic toilets, washbasins, and urinals tailored to your needs.
              </motion.p>
              <motion.button
                className="bg-emerald-400 text-emerald-900 px-8 py-3 rounded-full font-semibold shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Talk With Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CallToActionSection;