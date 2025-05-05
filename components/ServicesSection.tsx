import React from 'react';
import { Guitar, Keyboard, Laptop } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
      <div className={`${color} h-16 w-16 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${color.replace('bg-', 'bg-')}`}></span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Guitar className="h-8 w-8 text-white" />,
      title: "Guitar Lessons",
      description: "Master the guitar with our expert instructors through personalized lessons tailored to your skill level and musical interests.",
      features: ["One-on-one instruction", "All skill levels welcome", "Acoustic & electric guitar", "Performance opportunities"],
      color: "bg-primary"
    },
    {
      icon: <Keyboard className="h-8 w-8 text-white" />,
      title: "Keyboard Mastery",
      description: "Develop your keyboard skills from basics to advanced techniques with comprehensive lessons designed for rapid progress.",
      features: ["Classical & contemporary styles", "Music theory included", "Digital & acoustic piano", "Recital preparation"],
      color: "bg-accent"
    },
    {
      icon: <Laptop className="h-8 w-8 text-white" />,
      title: "Typing Classes",
      description: "Boost your typing speed and accuracy with our structured curriculum, perfect for students, professionals, and anyone wanting to improve.",
      features: ["Speed-building exercises", "Proper technique focus", "Progress tracking", "Certification available"],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Music Education</span> Services</h2>
          <p className="text-gray-600">Discover our range of professional music education services designed to help you achieve your musical goals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">Whether you're a beginner or looking to refine your skills, our expert instructors are here to guide your journey.</p>
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;