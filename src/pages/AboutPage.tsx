import  { Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main>
      <section className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Me</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey, approach, and passion for user-centered design.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?fit=crop&w=800&h=600" 
                    alt="UX Designer portrait" 
                    className="rounded-lg shadow-lg relative z-10"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">Senior UX Designer</h2>
                <p className="text-gray-600 mb-6">
                  With over 8 years of experience creating user-centered digital products for startups and enterprise companies.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Link to="/contact" className="btn btn-primary">
                    <Mail size={18} className="mr-2" /> Get in Touch
                  </Link>
                  <a href="#" className="btn btn-outline">
                    <Download size={18} className="mr-2" /> Download Resume
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">UX Research</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">UI Design</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Interaction Design</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Prototyping</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Information Architecture</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Usability Testing</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Design Systems</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">Design Thinking</span>
                    <span className="bg-white px-3 py-1 rounded text-sm text-gray-700 shadow-sm">User Journey Mapping</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold mb-6">My Story</h2>
              <p className="text-gray-700 mb-6">
                My journey into UX design began with a curiosity about how people interact with technology. With a background in psychology and visual design, I developed a passion for creating experiences that are not only visually appealing but also intuitive and meaningful.
              </p>
              <p className="text-gray-700 mb-8">
                Over the past 8 years, I've worked with startups, agencies, and enterprise companies across various industries including fintech, healthcare, and e-commerce. My approach combines strategic thinking with empathetic design to create solutions that address real user needs while achieving business objectives.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">My Design Philosophy</h3>
              <p className="text-gray-700 mb-8">
                I believe that great design is invisible. It should feel natural and intuitive, removing friction rather than calling attention to itself. My process is deeply rooted in understanding user needs through research and testing, iterating based on feedback, and continuously measuring the impact of design decisions.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <div className="space-y-8 mb-12">
                <div className="border-l-2 border-primary-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-semibold">Senior UX Designer</h4>
                  <p className="text-primary-600 font-medium">TechCorp Inc.</p>
                  <p className="text-gray-500 text-sm mb-2">2020 - Present</p>
                  <p className="text-gray-700">
                    Leading UX design for the company's flagship product, managing a team of designers, and collaborating with product and engineering teams to deliver exceptional user experiences.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-semibold">UX Designer</h4>
                  <p className="text-primary-600 font-medium">Design Studio XYZ</p>
                  <p className="text-gray-500 text-sm mb-2">2017 - 2020</p>
                  <p className="text-gray-700">
                    Designed digital products for various clients, conducted user research, created wireframes and prototypes, and facilitated design workshops.
                  </p>
                </div>
                
                <div className="border-l-2 border-primary-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary-600 rounded-full -left-[7px] top-1"></div>
                  <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                  <p className="text-primary-600 font-medium">StartupHub</p>
                  <p className="text-gray-500 text-sm mb-2">2015 - 2017</p>
                  <p className="text-gray-700">
                    Responsible for the visual design and user experience of the company's mobile application, increasing user engagement by 40%.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold">Master's in Human-Computer Interaction</h4>
                  <p className="text-gray-600">University of Design, 2015</p>
                </div>
                <div>
                  <h4 className="font-semibold">Bachelor's in Psychology</h4>
                  <p className="text-gray-600">State University, 2013</p>
                </div>
                <div>
                  <h4 className="font-semibold">Certified UX Professional</h4>
                  <p className="text-gray-600">Nielsen Norman Group, 2018</p>
                </div>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">My Approach to UX Design</h3>
                <p className="text-gray-700 mb-4">
                  I follow a human-centered design process that puts users at the core of every decision:
                </p>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <div>
                      <strong>Empathize:</strong> Understand user needs through research and data analysis
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div>
                      <strong>Define:</strong> Identify pain points and opportunities for improvement
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div>
                      <strong>Ideate:</strong> Generate diverse solutions through collaborative exploration
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div>
                      <strong>Prototype:</strong> Create interactive models to visualize solutions
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</span>
                    <div>
                      <strong>Test:</strong> Validate assumptions through user testing and feedback
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">6</span>
                    <div>
                      <strong>Implement:</strong> Collaborate with development to bring designs to life
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary-200 text-primary-800 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">7</span>
                    <div>
                      <strong>Measure:</strong> Analyze performance and iterate based on real user data
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
 