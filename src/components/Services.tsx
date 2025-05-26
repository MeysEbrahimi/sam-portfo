import  { Briefcase, Lightbulb, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section className="section bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Design Philosophy</h2>
          <p className="text-lg text-gray-600">Guided by principles that prioritize users, business goals, and elegant solutions.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Pixels to Purpose"
            description="A pencil's first circle becomes a user's path crafting UI that feels less like design, more like instinct."
            icon={<Lightbulb className="w-12 h-12 text-accent-500" />}
          />
          
          <ServiceCard 
            title="Crafting Invisible Logic"
            description="A decade behind the lens taught me to design not for spectacle, but for the quiet moments where users feel seen."
            icon={<Briefcase className="w-12 h-12 text-accent-500" />}
          />
          
          <ServiceCard 
            title="Insight Synthesizer"
            description="I filter signal from static, designing strategies anchored in observed truth."
            icon={<Users className="w-12 h-12 text-accent-500" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
 