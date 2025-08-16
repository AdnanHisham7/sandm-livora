import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <motion.section
      className="bg-white font-sans py-36"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-livera-light-green rounded-full px-4 py-2 flex items-center">
                <div className="w-3 h-3 bg-livera-green rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Trusted By Thousands of Customers</span>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Experts In<br />Modern and<br />Timeless <span className="text-livera-green italic">Ceramics</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
              At Livora, we specialize in providing high-quality ceramic products that combine modern design with timeless elegance. Our extensive range includes toilets, washbasins, urinals, and more, available in various styles and colors to suit any bathroom decor.
            </p>
            <motion.button
              className="bg-livera-green text-white px-8 py-4 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Call Now for Enquiry
            </motion.button>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <motion.div
                  className="bg-white rounded-2xl p-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Modern Bathroom" className="w-full h-64 object-cover rounded-xl" />
                </motion.div>
              </div>
              <div>
                <motion.div
                  className="bg-white rounded-2xl p-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Bathroom Interior" className="w-full h-40 object-cover rounded-lg" />
                </motion.div>
              </div>
              <div>
                <motion.div
                  className="bg-white rounded-2xl p-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Modern Toilet" className="w-full h-40 object-cover rounded-lg" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default HeroSection;