import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Clock, Users, FileText } from 'lucide-react';

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Project not found</h2>
        <Link to="/projects" className="text-primary-600 hover:underline">
          <ArrowLeft size={16} className="inline mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main>
      <div className="bg-gray-50 py-8">
        <div className="container-custom">
          <Link to="/projects" className="inline-flex items-center text-primary-600 hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{project.category}</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto mb-12">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Overview</h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Prologue: A Crisis of Connection</h3>
              <p className="text-gray-600 mb-6">
                In March 2020, as COVID-19 lockdowns swept Tehran, Saman Bank—a pillar of Iran's financial sector—faced an invisible rupture. Overnight, its 3,000+ employees became isolated islands. Hierarchical silos hardened. Trust eroded.
                This reality created not only physical danger but also anxiety and uncertainty that deeply affected morale and communication.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700">
                  Hamsaa is an enterprise social platform designed to address communication inefficiencies and low employee engagement in large organizations. During the COVID-19 pandemic, Saman Bank faced challenges in maintaining workplace culture and enabling safe, productive collaboration across its distributed workforce. As part of Hamsaa product team, By applying a structured design thinking approach I redesigned Hamsaa's MVP to empower employees with secure, intuitive tools for internal communication, anonymous feedback, and cultural alignment.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Understanding the Problem </h3 >
            <p className="text-gray-600 mb-4">
              My research approach included user interviews, competitive analysis, and usability testing to gather comprehensive insights about user needs and pain points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Key Findings:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Users struggled with complex navigation</li>
                  <li>Form completion rates were below industry average</li>
                  <li>Mobile users had higher abandonment rates</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Research Methods:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>8 in-depth user interviews</li>
                  <li>Competitive analysis of 5 similar products</li>
                  <li>Usability testing with 12 participants</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">The Solution</h3>
            <p className="text-gray-600 mb-8">
              Based on research insights, I developed a solution that simplified the user journey, restructured information architecture, and created an intuitive interface that addressed key pain points.
            </p>

            <h3 className="text-xl font-semibold mb-4">Results & Impact</h3>
            <p className="text-gray-600">
              The redesigned experience led to significant improvements in key metrics:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="bg-primary-50 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-primary-700">42%</span>
                <p className="text-sm text-primary-800">Increase in Conversions</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-primary-700">68%</span>
                <p className="text-sm text-primary-800">Improved Task Completion</p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg text-center">
                <span className="text-2xl font-bold text-primary-700">3.2x</span>
                <p className="text-sm text-primary-800">User Engagement</p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock size={18} className="text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">Timeline</h4>
                    <p className="text-gray-600 text-sm">12 weeks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users size={18} className="text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">My Role</h4>
                    <p className="text-gray-600 text-sm">Lead UX Designer</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText size={18} className="text-gray-500 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-gray-800">Deliverables</h4>
                    <p className="text-gray-600 text-sm">User Research, Wireframes, Prototypes, UI Design, Usability Testing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Figma</span>
                <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Sketch</span>
                <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Miro</span>
                <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">UserTesting</span>
                <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Hotjar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;