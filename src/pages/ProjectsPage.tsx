import  { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Filter } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main>
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my case studies and design work across various industries and platforms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-semibold text-gray-900">All Projects</h2>
            
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-500" />
              <span className="text-gray-600 text-sm">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      activeFilter === category 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category === 'all' ? 'All' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
 