import { motion } from 'framer-motion';

function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
            variants={itemVariants}
          >
            <motion.div
              className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-gray-400 text-xl">Image Placeholder</div>
            </motion.div>
          </motion.div>
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Why Choose Livora for Your Ceramic Needs
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              variants={itemVariants}
            >
              At Livora, we are committed to delivering premium ceramic products that enhance your bathroom with both functionality and style. Our dedication to quality ensures lasting performance and customer satisfaction.
            </motion.p>
            <div className="space-y-6">
              {[
                'High-quality ceramics for durability and elegance.',
                'Diverse designs and colors to suit every taste.',
                'Expert support for personalized product selection.',
                'Reliable delivery and installation services.',
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <motion.div
                    className="bg-emerald-500 rounded-full p-2 mr-4 mt-1"
                    variants={checkmarkVariants}
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <p className="text-gray-700">{text}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              className="mt-8 bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: '#059669' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Call Now For Enquiry
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;