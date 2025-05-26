import  { Mail, Phone, Send, Linkedin, Twitter, Github, Globe, Check } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <main>
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn bg-green-600 text-white hover:bg-green-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Speaking Engagement">Speaking Engagement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">◌</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:ebrahimi.meys@gmail.com" className="text-primary-600 hover:underline">
                        ebrahimi.meys@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-primary-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a href="tel:+989910493981" className="text-primary-600 hover:underline">
                        +98 0991 0493981
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 mb-3">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-200 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="LinkedIn">
                      <Linkedin size={20} className="text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                      <Twitter size={20} className="text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Dribbble">
                      <Globe size={20} className="text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-200 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors" aria-label="Github">
                      <Github size={20} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-primary-600 rounded-lg p-6 text-white">
                <h3 className="font-semibold text-xl mb-3">Availability</h3>
                <p className="mb-4 text-primary-100">
                  I'm currently available for freelance projects and full-time opportunities.
                </p>
                <div className="bg-primary-700 rounded p-4">
                  <h4 className="font-medium mb-2">Office Hours</h4>
                  <ul className="space-y-1 text-primary-100 text-sm">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM PST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>By appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
 