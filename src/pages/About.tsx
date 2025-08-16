import React from "react";
import { Award, Globe, Users, Zap } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-7 h-7 text-livera-green" />,
      title: "Quality",
      description: "Crafting premium ceramics with unmatched durability",
    },
    {
      icon: <Zap className="w-7 h-7 text-livera-green" />,
      title: "Innovation",
      description: "Designing cutting-edge bathroom solutions",
    },
    {
      icon: <Users className="w-7 h-7 text-livera-green" />,
      title: "Customer Focus",
      description: "Prioritizing your satisfaction and needs",
    },
    {
      icon: <Globe className="w-7 h-7 text-livera-green" />,
      title: "Sustainability",
      description: "Embracing eco-conscious manufacturing",
    },
  ];

  return (
    <>
      <Navbar isHome={false} />
      <motion.div
        className="min-h-screen bg-gray-50 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">Livora</span>
            </motion.h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-600">
              Transforming bathrooms with elegant, durable, and innovative ceramic solutions
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    Livora was founded to redefine bathroom experiences through high-quality ceramic products. With over a decade of expertise, we’ve grown into a trusted name across 20+ countries.
                  </p>
                  <p>
                    Our mission is to blend timeless elegance with modern functionality, offering products like toilets, washbasins, and accessories that elevate any space.
                  </p>
                  <p>
                    We are driven by a passion for quality and innovation, ensuring every Livora product transforms bathrooms into spaces of comfort and style.
                  </p>
                </div>
              </div>
              <div>
                <motion.img
                  src="https://images.pexels.com/photos/6782437/pexels-photo-6782437.jpeg"
                  alt="Livora ceramic products"
                  className="w-full rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Core <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-base text-gray-600 max-w-xl mx-auto">
                The principles that shape our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-livera-green/10 rounded-lg flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.img
                  src="https://images.pexels.com/photos/6782437/pexels-photo-6782437.jpeg"
                  alt="Livora manufacturing"
                  className="w-full rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Precision Manufacturing
                </h2>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <p>
                    Our advanced facilities combine craftsmanship with technology to produce ceramics of exceptional quality.
                  </p>
                  <p>
                    Every product undergoes meticulous quality control, from molding to glazing, ensuring durability and elegance.
                  </p>
                  <p>
                    We invest in innovation to deliver sustainable, high-performance solutions that meet modern bathroom needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Discover Livora’s <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className="text-base text-gray-300 mb-6 max-w-lg mx-auto">
                Elevate your bathroom with our premium ceramic solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="/products"
                  className="inline-flex items-center px-6 py-2 bg-livera-green text-white font-medium rounded-lg hover:bg-livera-dark-green transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Products
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 border-2 border-livera-green text-livera-green font-medium rounded-lg hover:bg-livera-green hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;