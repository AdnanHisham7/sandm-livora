import { motion } from 'framer-motion';

function ProductCategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-[#f9f7f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Our Premium Ceramic Products
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-gray-300 rounded-2xl p-6 flex flex-col justify-between"
            variants={itemVariants}
          >
            <motion.div
              className="aspect-[16/9] w-full bg-white rounded-xl mb-4 overflow-hidden"
              whileHover={imageVariants.hover}
            >
              <img src="https://example.com/toilet.jpg" alt="Toilets" className="w-full h-full object-cover" />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Toilets</h3>
            <p className="text-sm text-gray-700 mb-4">Discover our range of modern and efficient toilets designed for comfort and style.</p>
            <motion.div
              className="w-10 h-10 rounded-full bg-[#66f2b8] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-[#0b2e25] rounded-2xl p-6 flex flex-col justify-between text-white"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2">Washbasins</h3>
            <p className="text-sm mb-4">Choose from a variety of washbasins that blend functionality with elegant design.</p>
            <motion.div
              className="aspect-[16/9] w-full bg-white rounded-xl mb-4 overflow-hidden"
              whileHover={imageVariants.hover}
            >
              <img src="https://example.com/washbasin.jpg" alt="Washbasins" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="w-10 h-10 rounded-full bg-[#66f2b8] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-[#5c240e] rounded-2xl p-6 flex flex-col justify-between text-white"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold mb-2">Urinals</h3>
            <p className="text-sm mb-4">Our urinals offer hygiene and ease of use for commercial and residential settings.</p>
            <motion.div
              className="aspect-[16/9] w-full bg-white rounded-xl mb-4 overflow-hidden"
              whileHover={imageVariants.hover}
            >
              <img src="https://example.com/urinal.jpg" alt="Urinals" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="w-10 h-10 rounded-full bg-[#66f2b8] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-gray-300 rounded-2xl p-6 flex flex-col justify-between"
            variants={itemVariants}
          >
            <motion.div
              className="aspect-[16/9] w-full bg-white rounded-xl mb-4 overflow-hidden"
              whileHover={imageVariants.hover}
            >
              <img src="https://example.com/accessories.jpg" alt="Accessories" className="w-full h-full object-cover" />
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessories</h3>
            <p className="text-sm text-gray-700 mb-4">Complete your bathroom with our ceramic accessories like soap dishes and towel racks.</p>
            <motion.div
              className="w-10 h-10 rounded-full bg-[#66f2b8] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductCategoriesSection;