import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs = [
    { id: 'faq1', question: 'What materials are used in your ceramic products?', answer: 'Our products are crafted from high-quality porcelain and vitreous china for durability and a glossy finish.' },
    { id: 'faq2', question: 'Do you offer installation services?', answer: 'Yes, we provide professional installation services. Contact us for details and pricing.' },
    { id: 'faq3', question: 'How can I track my order?', answer: 'You’ll receive a tracking number via email once your order ships, or check your account dashboard.' },
    { id: 'faq4', question: 'What is your return policy?', answer: 'We offer a 30-day return policy for unused, undamaged products. See our returns page for details.' },
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section className="pt-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-2"
            variants={itemVariants}
          >
            Frequently Asked
          </motion.h2>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Questions
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            variants={itemVariants}
          >
            We're here to help you choose the perfect ceramic products with confidence.
          </motion.p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map(faq => (
            <motion.div
              key={faq.id}
              className="border border-gray-200 rounded-lg bg-white"
              variants={itemVariants}
            >
              <motion.button
                className="w-full px-6 py-5 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(faq.id)}
                whileHover={{ backgroundColor: '#f9fafb' }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <motion.svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    className="px-6 pb-4 text-gray-600 text-sm"
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQSection;