import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function StatsSection() {
  const stats = [
    { value: 10000, suffix: '+', label: 'Satisfied Customers' },
    { value: 4.9, suffix: '★', label: 'Average Rating' },
    { value: 18, suffix: ' Yrs', label: 'Years in Business' },
    { value: 20, suffix: '+', label: 'Product Variants' },
  ];

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

  const NumberCounter = ({ endValue, duration = 2 }: { endValue: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = endValue / (duration * 60); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.min(start, endValue));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [endValue, duration]);

    return <span>{Math.round(count * 10) / 10}</span>;
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-800 to-teal-700 py-20 rounded-3xl">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <div className="text-5xl font-bold text-white flex justify-center items-center">
                <NumberCounter endValue={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-300 mt-2 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;