function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg fade-in">
            <p className="text-gray-700 mb-6 italic">"Livora's washbasins are stunning and functional—my bathroom feels luxurious now!"</p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-sm text-gray-500">Verified Buyer</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg fade-in">
            <p className="text-gray-700 mb-6 italic">"The quality of Livora's toilets is exceptional, and their customer service is outstanding."</p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b2130e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Jane Smith" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-semibold text-gray-900">Jane Smith</div>
                <div className="text-sm text-gray-500">Verified Buyer</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card bg-white rounded-2xl p-8 shadow-lg fade-in">
            <p className="text-gray-700 mb-6 italic">"Livora's urinals are sleek and easy to maintain—perfect for our office space."</p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Mike Johnson" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-semibold text-gray-900">Mike Johnson</div>
                <div className="text-sm text-gray-500">Verified Buyer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;