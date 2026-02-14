import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = ({ isVisible }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className={`max-w-2xl mx-auto w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border-4 border-gray-200 p-8 md:p-12 transform hover:scale-105 transition-all duration-300" style={{ boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff' }}>
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            <Mail className="inline-block mr-2" /> Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 shadow-inner"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 shadow-inner"
                required
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900 shadow-inner"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{ boxShadow: '10px 10px 30px #bebebe, -10px -10px 30px #ffffff' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;