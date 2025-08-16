import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import CategoriesSection from '../components/CategoriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProductCategoriesSection from '../components/ProductCategoriesSection';
import FAQSection from '../components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar isHome={true} />
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <CategoriesSection />
      {/* <TestimonialsSection /> */}
      <ProductCategoriesSection />
      <FAQSection />
      <CallToActionSection />
      <Footer />
    </motion.div>
  );
}

export default HomePage;