import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "snehabargali5@gmail.com",
      link: "mailto:snehabargali5@gmail.com",
      description: "Send me an email anytime"
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: "Phone",
    //   content: "+91 XXX XXX XXXX",
    //   link: "tel:+91XXXXXXXXXX",
    //   description: "Call me for quick discussion"
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: "Bangalore, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Snehaa-B",
      color: "hover:bg-gray-900 hover:text-white",
      followers: "Follow my code"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sneha-bargale-783970349/",
      color: "hover:bg-blue-600 hover:text-white",
      followers: "Professional network"
    }
    // {
    //   icon: <ExternalLink className="w-6 h-6" />,
    //   name: "LeetCode",
    //   url: "https://leetcode.com/u/Sneha_13/",
    //   color: "hover:bg-orange-500 hover:text-white",
    //   followers: "100+ problems solved"
    // }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, 
            or simply chat about technology and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. I'm currently open to internship opportunities and 
                exciting projects where I can contribute and learn.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium mb-1 block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-white font-medium mb-1">{info.content}</p>
                    )}
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Connect on Social Platforms</h4>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 ${social.color}`}
                  >
                    <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-all duration-300">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-current">
                        {social.name}
                      </h5>
                      <p className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-current/80">
                        {social.followers}
                      </p>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 group-hover:text-current/80 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-300 font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600"
                  placeholder="What's this regarding?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;