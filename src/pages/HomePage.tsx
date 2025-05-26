import  Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectGallery from '../components/ProjectGallery';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const HomePage = () => {
  // Show only 3 projects on the homepage
  const featuredProjects = projects.slice(0, 3);

  return (
    <main>
      <Hero />
      
      <Services />
      
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Projects</h2>
              <p className="mt-2 text-lg text-gray-600">
                Explore some of my recent work
              </p>
            </div>
            <Link to="/projects" className="mt-4 md:mt-0 btn btn-outline">
              View All Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          
          <ProjectGallery projects={featuredProjects} />
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm currently available for freelance projects and full-time opportunities. 
              If you're looking for a designer who can help solve complex problems and create 
              delightful user experiences, let's connect.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
 