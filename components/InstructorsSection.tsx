import React from 'react';
import { Guitar, Keyboard, Laptop, Mail, Instagram, Youtube } from 'lucide-react';

interface Instructor {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialty: React.ReactNode;
  experience: string;
  socials: {
    email: string;
    instagram?: string;
    youtube?: string;
  };
}

const InstructorsSection: React.FC = () => {
  const instructors: Instructor[] = [
    {
      name: "James Wilson",
      role: "Guitar Instructor",
      image: "https://images.pexels.com/photos/1699159/pexels-photo-1699159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "James brings over 15 years of experience as a professional guitarist and educator. His teaching approach blends technical mastery with creative expression.",
      specialty: <Guitar className="h-5 w-5" />,
      experience: "15+ years",
      socials: {
        email: "james@harmonyhub.com",
        instagram: "james_guitar",
        youtube: "JamesWilsonGuitar"
      }
    },
    {
      name: "Elena Martinez",
      role: "Keyboard Instructor",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "With classical training and contemporary expertise, Elena helps students develop a solid foundation while exploring various musical genres.",
      specialty: <Keyboard className="h-5 w-5" />,
      experience: "12+ years",
      socials: {
        email: "elena@harmonyhub.com",
        instagram: "elena_keys",
        youtube: "ElenaKeysMusic"
      }
    },
    {
      name: "Michael Chen",
      role: "Typing Instructor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      bio: "Michael specializes in teaching efficient typing techniques that help students boost their speed and accuracy while maintaining proper ergonomics.",
      specialty: <Laptop className="h-5 w-5" />,
      experience: "8+ years",
      socials: {
        email: "michael@harmonyhub.com"
      }
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert <span className="text-primary">Instructors</span></h2>
          <p className="text-gray-600">Meet our team of professional instructors who are passionate about helping you achieve your learning goals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                      <p className="text-primary">{instructor.role}</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      {instructor.specialty}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-5">{instructor.bio}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Experience: </span>
                      {instructor.experience}
                    </div>
                    <div className="flex gap-2">
                      <a href={`mailto:${instructor.socials.email}`} className="text-gray-500 hover:text-primary transition-colors duration-300">
                        <Mail className="h-5 w-5" />
                      </a>
                      {instructor.socials.instagram && (
                        <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors duration-300">
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {instructor.socials.youtube && (
                        <a href="#" className="text-gray-500 hover:text-red-600 transition-colors duration-300">
                          <Youtube className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;