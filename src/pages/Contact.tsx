import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    brand: 'Livora'
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '9b3d27e9-d24c-4292-a7a8-1d55ca30f518',
          ...formData
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          brand: 'Livora'
        });
      } else {
        setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-livera-green" />,
      title: 'Our Location',
      details: ['Abudhabi, UAE']
    },
    {
      icon: <Phone className="w-6 h-6 text-livera-green" />,
      title: 'Contact Number',
      details: ['+91 9019 23 2309']
    },
    {
      icon: <Mail className="w-6 h-6 text-livera-green" />,
      title: 'Email Address',
      details: ['info@livora.com']
    },
    {
      icon: <Clock className="w-6 h-6 text-livera-green" />,
      title: 'Operating Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday: 10:00 AM - 3:00 PM',
        'Sunday: Closed'
      ]
    }
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
              Get in Touch with <span className="bg-gradient-to-r from-livera-green to-emerald-500 bg-clip-text text-transparent">Livora</span>
            </motion.h1>
            <p className="text-lg md:text-xl max-w-2xl text-gray-600">
              Connect with us to explore premium ceramic solutions for your bathroom.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send a <span className="text-livera-green">Message</span>
              </h2>
              {status && (
                <div className={`mb-4 p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {status.message}
                </div>
              )}
              <div className="space-y-4">
                <input
                  type="hidden"
                  name="brand"
                  value="Livora"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                      Full Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-livera-green focus:border-livera-green"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                      Email Address *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-livera-green focus:border-livera-green"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1">
                      Company
                    </label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-livera-green focus:border-livera-green"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                      Phone Number
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-livera-green focus:border-livera-green"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-1">
                    Subject *
                  </label>
                  <motion.select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-livera-green focus:border-livera-green"
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quote-request">Quote Request</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </motion.select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-livera-green focus:border-livera-green resize-none"
                    placeholder="Tell us about your inquiry..."
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  className="w-full bg-livera-green text-white px-5 py-2 rounded-lg hover:bg-livera-dark-green transition-colors duration-200 font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Reach <span className="text-livera-green">Out</span>
                </h2>
                <p className="text-base text-gray-600 mb-6">
                  Whether you're designing a luxury bathroom or seeking high-quality ceramic products, our team is here to provide tailored solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg p-5 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-livera-green/10 rounded-lg flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-1">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;