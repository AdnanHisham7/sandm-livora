function Footer() {
  return (
    <footer className="gradient-bg text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-emerald-400 rounded-lg mr-3 flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-800 rounded"></div>
              </div>
              <span className="text-2xl font-bold">Livora</span>
            </div>
            <div className="space-y-2 text-emerald-100">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@livora.com
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 9019 23 2309
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Abudhabi, UAE
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-100">Home</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Our Mission</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Our Courses</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Our Testimonials</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Our FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-100">About Us</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Company</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Achievements</a></li>
              <li><a href="#" className="hover:text-emerald-300 transition-colors duration-200">Our Goals</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-emerald-100">Social Profiles</h4>
            <div className="flex space-x-3">
              {/* Add social icons here if needed */}
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-emerald-200 text-sm">
          <p>© 2024 Livora. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-300 transition-colors duration-200">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;