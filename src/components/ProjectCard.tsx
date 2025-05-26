import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
          {project.category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-gray-900 leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          {project.description}
        </p>
        <Link 
          to={`/projects/${project.slug}`} 
          className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          View Details <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
 