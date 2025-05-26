import  { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectGalleryProps {
  projects: Project[];
}

const ProjectGallery = ({ projects }: ProjectGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
 