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
            <h2 className="text-3xl font-bold mb-8">Understanding the Problem</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Act I: A Crisis of Connection</h3>
              <p className="text-gray-600 mb-6">
                Business Context: Saman Bank relied on WhatsApp for internal communication, causing fragmented workflows, security risks, and low psychological safety.
                Employees avoided feedback due to social and hierarchical norms (تَعارُف culture) and fear of retaliation.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-semibold mb-4">Internal Audit:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>No anonymity for feedback.</li>
                  <li>WhatsApp groups lacked role-based access, confusing cashiers.</li>
                  <li>Zero analytics for HR to measure campaign impact.</li>
                  <li>Mapping current MVP and similar products analysis</li>
                </ul>
              </div>

              <div className="space-y-6">
                <img 
                  src="https://s6.uupload.ir/files/snappshot_1_on8t.png" 
                  alt="Internal meeting at Saman Bank" 
                  className="w-full rounded-lg shadow-md"
                />
                <img 
                  src="https://s6.uupload.ir/files/snappshot_2_on8t.png" 
                  alt="Team discussion at Saman Bank" 
                  className="w-full rounded-lg shadow-md"
                />
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