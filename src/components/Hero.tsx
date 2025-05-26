import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Sam <span className="text-primary-600">Ebrahimi</span>
            </h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">Experience Designer</h2>
            <p className="mt-6 text-xl text-gray-600 max-w-lg">
              Adaptive UX designer, leveraging 12+ years of agile workflows to deliver impactful, human-centered digital solutions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500 rounded-full opacity-20"></div>
              <img 
                src="https://imagedelivery.net/FIZL8110j4px64kO6qJxWA/ed73d2ff-3765-4f26-73c2-fcf94926c500/public" 
                alt="Sam Ebrahimi by the water" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 