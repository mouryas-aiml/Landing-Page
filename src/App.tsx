import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Facebook, Twitter, Instagram, 
  Youtube, MessageSquare, MapPin, Send, Phone,
  Mail, ArrowDown, CheckCircle, AlertCircle
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formResponse, setFormResponse] = useState({
    message: '',
    isSuccess: false,
    isVisible: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.phone && formData.message) {
      setFormResponse({
        message: `Thank you, ${formData.name}! We have received your message.`,
        isSuccess: true,
        isVisible: true
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } else {
      setFormResponse({
        message: 'Please fill out all fields.',
        isSuccess: false,
        isVisible: true
      });
    }

    setTimeout(() => {
      setFormResponse(prev => ({ ...prev, isVisible: false }));
    }, 5000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className={`font-bold text-2xl ${isScrolled ? 'text-indigo-600' : 'text-white'}`}>
            MoYa
          </h1>
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-indigo-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            ></div>
          ))}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Welcome to MoYa Landing Page!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Explore creativity and vibrant design with a modern touch
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Explore Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white opacity-80 hover:opacity-100"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 transform -skew-y-6 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are passionate about bringing color to your web experience. Our team of creative designers and developers work together to craft unique digital experiences that stand out in today's crowded online landscape.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
              With a focus on modern design principles and cutting-edge technologies, we help businesses and individuals express their unique identity through vibrant, engaging web solutions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <CheckCircle className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Creative Design</h3>
                  <p className="text-gray-600">Unique visual experiences</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <CheckCircle className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Modern Technology</h3>
                  <p className="text-gray-600">Latest web standards</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <CheckCircle className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">User Experience</h3>
                  <p className="text-gray-600">Intuitive interfaces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a range of services to help bring your digital vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Design",
                description: "Creating stunning visuals and user interfaces that captivate your audience and reflect your brand identity.",
                color: "from-pink-500 to-red-500",
                delay: "0"
              },
              {
                title: "Development",
                description: "Building functional, responsive websites and applications using modern technologies and best practices.",
                color: "from-indigo-500 to-blue-500",
                delay: "100"
              },
              {
                title: "Support",
                description: "Providing ongoing maintenance, updates, and technical assistance to ensure your digital presence remains flawless.",
                color: "from-green-500 to-teal-500",
                delay: "200"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{animationDelay: `${service.delay}ms`}}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Starting at $499</span>
                  <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mourya S",
                role: "CEO, MoYa",
                image: "https://avatars.githubusercontent.com/u/149702739?v=4",
                quote: "As the creator of MoYa, I'm passionate about delivering exceptional web experiences. Our mission is to transform digital presence through innovative design and cutting-edge technology.",
                github: "https://github.com/mouryas-aiml"
              },
              {
                name: "Rajesh Patel",
                role: "Founder, Innovate Solutions",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                quote: "The attention to detail and creative approach to our website redesign exceeded our expectations. Our conversion rates have improved by 35% since the launch!"
              },
              {
                name: "Ananya Desai",
                role: "CEO, Artisan Crafts",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                quote: "Our e-commerce store has seen a 50% increase in sales after the redesign. The colorful, user-friendly interface has made our products shine and improved customer experience."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-indigo-200">{testimonial.role}</p>
                    {testimonial.github && (
                      <a 
                        href={testimonial.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-200 hover:text-white flex items-center mt-1"
                      >
                        <Github size={16} className="mr-1" />
                        <span>GitHub Profile</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 transform skew-y-6 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
            <p className="text-white mt-4 max-w-2xl mx-auto">
              We would love to hear from you! Fill out the form below to get in touch.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-white bg-opacity-20 p-2 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-indigo-100">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-white bg-opacity-20 p-2 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-indigo-100">mouryas@outlook.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-white bg-opacity-20 p-2 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-indigo-100">+91 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/mouryas-aiml" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mourya-s-4518b9296" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.facebook.com/mouryagowda.s" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/Mr_Mourya_Gowda" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/_mourya__gowda_/" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-xl p-6"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
                
                {formResponse.isVisible && (
                  <div className={`mt-4 p-3 rounded-lg flex items-center ${formResponse.isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {formResponse.isSuccess ? (
                      <CheckCircle size={20} className="mr-2" />
                    ) : (
                      <AlertCircle size={20} className="mr-2" />
                    )}
                    {formResponse.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MoYa</h3>
              <p className="text-gray-400">
                Creating vibrant digital experiences that captivate and inspire.
              </p>
              <div className="mt-4 flex space-x-3">
                <a href="https://github.com/mouryas-aiml" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/mourya-s-4518b9296" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.facebook.com/mouryagowda.s" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/Mr_Mourya_Gowda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/_mourya__gowda_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {['Web Design', 'Development', 'UI/UX Design', 'Branding', 'SEO'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} MoYa Landing Page. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white mx-2 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default App;