import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductById, getProductsByBrand } from '../api';
import { api } from '../api';
import { ArrowLeft, ArrowRight, Heart, Share2, Eye } from 'lucide-react';

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productData = await getProductById(productId);
        setProduct(productData);

        const brandName = 'livora';
        const filters = { category: productData.category?._id, exclude: productId };
        const related = await getProductsByBrand(brandName, filters);
        setRelatedProducts(related.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [productId]);

  if (loading)
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Loading...
      </motion.div>
    );

  if (error || !product)
    return (
      <motion.div
        className="min-h-screen bg-gray-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-livera-green to-emerald-500 text-white font-semibold rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Shop
          </motion.button>
        </div>
      </motion.div>
    );

  const currentImages = product.images || [];

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
            className="flex items-center mb-8 text-sm text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => (window.location.href = '/')}
              className="hover:text-livera-green transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Home
            </motion.button>
            <span className="text-gray-600 mx-2">/</span>
            <motion.button
              className="hover:text-livera-green transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Shop
            </motion.button>
            <span className="text-gray-600 mx-2">/</span>
            <motion.button
              onClick={() => (window.location.href = `/category/${product.category?._id}`)}
              className="hover:text-livera-green transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {product.category?.name || 'Category'}
            </motion.button>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-livera-green">{product.name}</span>
          </motion.div>
          <motion.div
            className="grid lg:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                className="aspect-square bg-white border border-gray-200 rounded-2xl overflow-hidden relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                  src={api + currentImages[currentImageIndex] || 'https://via.placeholder.com/600'}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {currentImages.length > 1 && (
                  <>
                    <motion.button
                      onClick={() =>
                        setCurrentImageIndex(
                          currentImageIndex === 0 ? currentImages.length - 1 : currentImageIndex - 1
                        )
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full flex items-center justify-center hover:bg-livera-green/80 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowLeft size={20} />
                    </motion.button>
                    <motion.button
                      onClick={() =>
                        setCurrentImageIndex((currentImageIndex + 1) % currentImages.length)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full flex items-center justify-center hover:bg-livera-green/80 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ArrowRight size={20} />
                    </motion.button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {currentImages.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-livera-green w-6' : 'bg-gray-400'
                          }`}
                          whileHover={{ scale: 1.2 }}
                        />
                      ))}
                    </div>
                  </>
                )}
                <motion.button
                  className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm text-gray-900 rounded-full flex items-center justify-center hover:bg-livera-green/80 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye size={20} />
                </motion.button>
              </motion.div>
              {currentImages.length > 1 && (
                <motion.div
                  className="flex space-x-4 overflow-x-auto pb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {currentImages.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'border-livera-green'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={api + image}
                        alt={`${product.name} thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.span
                    className="px-3 py-1 bg-gradient-to-r from-livera-green/10 to-emerald-500/10 border border-livera-green/20 text-livera-green text-sm font-medium rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {product.category?.name || 'Category'}
                  </motion.span>
                  <div className="flex items-center space-x-2">
                    <motion.button
                      className="p-2 text-gray-600 hover:text-livera-green transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={20} />
                    </motion.button>
                    <motion.button
                      className="p-2 text-gray-600 hover:text-livera-green transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 size={20} />
                    </motion.button>
                  </div>
                </div>
                <motion.h1
                  className="text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.name}
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 leading-relaxed">{product.description || 'No description available'}</p>
              </motion.div>
              {product.specifications?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-3 bg-white border border-gray-200 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-livera-green rounded-full mr-3"></div>
                        <span className="text-gray-600 text-sm">{spec}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              {product.sketchImages?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Sketches</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.sketchImages.map((image, index) => (
                      <motion.img
                        key={index}
                        src={api + image}
                        alt={`Design sketch ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.a
                  href={`https://wa.me/9019232309?text=${encodeURIComponent(
                    `Hello, I’m interested in receiving a quote for the product: "${product.name}". Could you please share the pricing and any additional details?\n\nThank you.\n@livora`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center py-4 bg-gradient-to-r from-livera-green to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-livera-green/25 hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request Quote
                </motion.a>
              </motion.div>
              <motion.div
                className="p-6 bg-white border border-gray-200 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-gray-900 font-semibold mb-4">Installation & Care</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Professional installation recommended</li>
                  <li>• Standard mounting hardware included</li>
                  <li>• Easy-clean ceramic coating</li>
                  <li>• 5-year craftsmanship warranty</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {relatedProducts.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2
                  className="text-3xl font-bold text-gray-900 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Similar{' '}
                  <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">
                    Products
                  </span>
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedProducts.map((relatedProduct, index) => (
                    <motion.div
                      key={relatedProduct._id}
                      className="group cursor-pointer bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-livera-green/50 transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => (window.location.href = `/product/${relatedProduct._id}`)}
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <motion.img
                          src={api + relatedProduct.images?.[0] || 'https://via.placeholder.com/600'}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        {relatedProduct.featured && (
                          <span className="absolute top-4 right-4 px-3 py-1 bg-livera-green/80 text-white font-medium rounded-full text-xs">
                            FEATURED
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-livera-green font-medium uppercase tracking-wider">
                          {relatedProduct.category?.name || 'Category'}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-livera-green transition-colors duration-300">
                          {relatedProduct.name}
                        </h3>
                        <div className="flex items-center text-livera-green font-medium group-hover:text-emerald-500 transition-colors duration-300">
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
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;