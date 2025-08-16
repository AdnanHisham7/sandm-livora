import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCategoriesByBrand, getProductsByBrand } from '../api';
import { api } from '../api';
import { Search, Grid, List, ArrowRight } from 'lucide-react';

function ShoppingPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ search: '', category: categoryId || '' });
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const brandName = 'livora';
        const categoriesData = await getCategoriesByBrand(brandName);
        setCategories(categoriesData);

        const currentCategory = filters.category
          ? categoriesData.find(cat => cat._id === filters.category)
          : null;
        setCategory(
          currentCategory || {
            name: 'All Products',
            description: 'Discover our entire range of products.',
            image: 'https://via.placeholder.com/1200x400',
          }
        );

        const productsData = await getProductsByBrand(brandName, filters);
        setProducts(productsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters]);

  const handleSearch = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ search: '', category: '' });
  };

  if (loading)
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Loading...
      </motion.div>
    );
  if (error)
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Error: {error}
      </motion.div>
    );

  return (
    <>
      <Navbar isHome={false} />
      <motion.div
        className="min-h-screen bg-gray-50 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4 text-sm text-gray-600">
              <motion.a
                href="/"
                className="hover:text-livera-green transition-colors duration-300 mr-2"
                whileHover={{ scale: 1.05 }}
              >
                Home
              </motion.a>
              <span className="mx-2">/</span>
              <span className="text-livera-green">Shop</span>
              {filters.category && products[0]?.category?.name && (
                <>
                  <span className="mx-2">/</span>
                  <span className="text-gray-900">{products[0].category.name}</span>
                </>
              )}
            </div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {filters.category && products[0]?.category?.name ? (
                <>
                  <span className="text-gray-900">{products[0].category.name}</span>
                  <br />
                  <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">
                    Collection
                  </span>
                </>
              ) : (
                <>
                  <span className="text-gray-900">All </span>
                  <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">
                    Products
                  </span>
                </>
              )}
            </motion.h1>
          </motion.div>
          <motion.div
            className="flex flex-col lg:flex-row gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <motion.input
                type="text"
                placeholder="Search products..."
                value={filters.search}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-livera-green focus:outline-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-48 relative">
              <motion.select
                value={filters.category}
                onChange={handleCategoryChange}
                className="w-full pl-4 pr-10 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-livera-green focus:outline-none appearance-none"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <motion.option
                    key={category._id}
                    value={category._id}
                    className="bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.name}
                  </motion.option>
                ))}
              </motion.select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="h-4 w-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-3 transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-livera-green text-white' : 'text-gray-400 hover:text-livera-green'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Grid size={20} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                className={`p-3 transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-livera-green text-white' : 'text-gray-400 hover:text-livera-green'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <List size={20} />
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-between items-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-600">
              Showing {products.length} result{products.length !== 1 ? 's' : ''}{' '}
              {filters.search && `for "${filters.search}"`}
            </div>
            {(filters.category || filters.search) && (
              <motion.button
                onClick={clearFilters}
                className="text-livera-green hover:text-emerald-600 transition-colors duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear filters
              </motion.button>
            )}
          </motion.div>
          <AnimatePresence>
            {products.length > 0 ? (
              <div
                className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
              >
                {products.map((product, index) => (
                  <motion.div
                    key={product._id}
                    className={`group cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-livera-green/50 transition-all duration-500'
                        : 'flex bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-livera-green/50 transition-all duration-500'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => window.location.href = `/product/${product._id}`}
                  >
                    <div
                      className={
                        viewMode === 'grid'
                          ? 'aspect-square overflow-hidden relative'
                          : 'w-48 aspect-square overflow-hidden relative flex-shrink-0'
                      }
                    >
                      <motion.img
                        src={api + product.images?.[0] || 'https://via.placeholder.com/600'}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {product.featured && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-livera-green/80 text-white font-medium rounded-full text-xs">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <div className={viewMode === 'grid' ? 'p-6' : 'p-6 flex-1'}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-livera-green font-medium uppercase tracking-wider">
                          {product.category?.name || 'Category'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-livera-green transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p
                        className={`text-gray-600 text-sm leading-relaxed mb-4 ${
                          viewMode === 'grid' ? 'line-clamp-2' : ''
                        }`}
                      >
                        {product.description || 'No description available'}
                      </p>
                      {product.specifications?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.specifications
                            .slice(0, viewMode === 'grid' ? 2 : 3)
                            .map((spec, specIndex) => (
                              <span
                                key={specIndex}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                              >
                                {spec.split(' ').slice(0, 2).join(' ')}
                              </span>
                            ))}
                        </div>
                      )}
                      <div className="flex items-center text-livera-green font-medium group-hover:text-emerald-600 transition-colors duration-300">
                        <span className="mr-2">View Product</span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-livera-green/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-livera-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  We couldn't find any products matching your search.
                </p>
                <motion.button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-gradient-to-r from-livera-green to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-livera-green/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse All Products
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default ShoppingPage;