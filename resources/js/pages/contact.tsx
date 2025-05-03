import React, { useState } from 'react';
import { RootLayout } from '@/components/RootLayout';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactMethod = ({ icon: Icon, title, description, buttonText }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="bg-blue-100 p-4 rounded-full mb-4">
        <Icon className="text-blue-600" size={24} />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="text-blue-600 font-medium flex items-center gap-1 hover:text-blue-800">
        {buttonText} <Send size={16} />
      </button>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted with data:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission state after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "We'll respond to your inquiry within 24 hours during business days.",
      buttonText: "support@projectmanager.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our customer support team.",
      buttonText: "+1 (555) 123-4567"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help through our live chat service.",
      buttonText: "Start a chat"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "345 Market Street, Suite 600, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567"
    },
    {
      city: "New York",
      address: "1 Madison Avenue, 5th Floor, New York, NY 10010",
      phone: "+1 (555) 234-5678"
    },
    {
      city: "London",
      address: "10 Finsbury Square, London EC2A 1AF, UK",
      phone: "+44 20 1234 5678"
    }
  ];

  return (
    <RootLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or need help? We're here for you. Reach out through any of the methods below.
          </p>
        </div>

        {/* Contact Methods Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <ContactMethod
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                buttonText={method.buttonText}
              />
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : null}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="bg-blue-600 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-8">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="flex gap-4">
                      <div>
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{office.city}</h3>
                        <p className="text-blue-100 mb-1">{office.address}</p>
                        <p className="text-blue-100">{office.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend using our live chat option.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Do you offer custom enterprise solutions?</h3>
              <p className="text-gray-600">
                Yes, we provide tailored solutions for enterprise clients. Please contact our sales team to discuss your specific requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Where can I find pricing information?</h3>
              <p className="text-gray-600">
                Detailed pricing information can be found on our Pricing page. We offer flexible plans for teams of all sizes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial with full access to all features. No credit card required to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default ContactPage;