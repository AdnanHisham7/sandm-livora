import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCategoriesByBrand } from '../api';
import { api } from '../api';

function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const brandName = 'livora';
        const categoriesData = await getCategoriesByBrand(brandName);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Loading...</motion.div>;
  if (error) return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Error: {error}</motion.div>;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Categories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatePresence>
            {categories.map((category, index) => (
              <motion.a
                href={`/category/${category._id}`}
                key={category._id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={api + category.image || 'https://via.placeholder.com/600'}
                  alt={category.name}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <motion.div
                  className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/50"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">{category.name}</div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;