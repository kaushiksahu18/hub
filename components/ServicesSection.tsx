import React from "react";
import { Guitar, Paintbrush, Keyboard, Mouse, Music } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  color,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-2">
      <div
        className={`${color} h-16 w-16 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${color.replace("bg-", "bg-")}`}
            ></span>
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
      icon: <Music className="h-8 w-8 text-white" />,
      title: "Singing Sessions",
      description:
        "Unleash your vocal potential with expert vocal coaches guiding you through tone, pitch, and performance techniques.",
      features: [
        "Breathing & voice control",
        "All genres: Pop to Classical",
        "Live & studio experience",
        "Performance grooming",
      ],
      color: "bg-pink-600",
    },
    {
      icon: <Guitar className="h-8 w-8 text-white" />,
      title: "Guitar Lessons",
      description:
        "Master the guitar with our expert instructors through personalized lessons tailored to your skill level and musical interests.",
      features: [
        "One-on-one instruction",
        "All skill levels welcome",
        "Acoustic & electric guitar",
        "Performance opportunities",
      ],
      color: "bg-primary",
    },
    {
      icon: <Dance className="h-8 w-8 text-white" />,
      title: "Dance Workshops",
      description:
        "From freestyle to choreography, refine your rhythm, body coordination, and expression with high-energy dance sessions.",
      features: [
        "Hip-Hop, Bollywood, Contemporary",
        "Body conditioning & flexibility",
        "Solo & group routines",
        "Stage-ready grooming",
      ],
      color: "bg-orange-500",
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-white" />,
      title: "Painting Studio",
      description:
        "Explore your creativity through colors and techniques, from canvas basics to abstract expressionism.",
      features: [
        "Watercolor, Acrylic, Oil",
        "Sketching & composition",
        "Art exhibitions & contests",
        "All age groups welcome",
      ],
      color: "bg-yellow-600",
    },
    {
      icon: <Keyboard className="h-8 w-8 text-white" />,
      title: "Keyboard Mastery",
      description:
        "Develop your keyboard skills from basics to advanced techniques with comprehensive lessons designed for rapid progress.",
      features: [
        "Classical & contemporary styles",
        "Music theory included",
        "Digital & acoustic piano",
        "Recital preparation",
      ],
      color: "bg-accent",
    },
    {
      icon: <Mouse className="h-8 w-8 text-white" />,
      title: "Mouse Navigation Training",
      description:
        "Master mouse controls with precision for gaming, design, or efficient digital workflows.",
      features: [
        "Click & drag techniques",
        "Speed & accuracy training",
        "Custom DPI configurations",
        "Ergonomic usage tips",
      ],
      color: "bg-lime-600",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Music Education</span> Services
          </h2>
          <p className="text-gray-600">
            Discover our range of professional music education services designed
            to help you achieve your musical goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

const Dance = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="none"
      stroke="currentColor"
      d="M10 6.525L8.5 13.75V14l5 2.5v.5c0 1.5 0 3.5.75 5c0 0 .75 1.5 1.75 1.5m-3-9.75l1.002-4.845A2 2 0 0 0 12.044 6.5H10.5a4.91 4.91 0 0 0-4.81 3.917L5.154 13M15.5 10.188C17 11.5 19 12 21 12m-10.5 5.5c-1 3-3 5-5.5 5m8.35-18s-1.6-1-1.6-2.25a1.746 1.746 0 1 1 3.495 0c0 1.25-1.595 2.25-1.595 2.25z"
    ></path>
  </svg>
);
