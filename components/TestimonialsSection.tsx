"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
  service: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Guitar Student",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote: "My guitar skills have improved dramatically since joining HarmonyHub. The instructors are patient, knowledgeable, and truly passionate about music education.",
      rating: 5,
      service: "Guitar Lessons"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Keyboard Student",
      avatar: "https://i.pravatar.cc/150?img=11",
      quote: "The keyboard lessons have been transformational. I went from barely knowing the basics to confidently playing my favorite songs in just a few months.",
      rating: 5,
      service: "Keyboard Mastery"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Typing Course Graduate",
      avatar: "https://i.pravatar.cc/150?img=5",
      quote: "The typing course doubled my typing speed in just 8 weeks! The techniques and practice methods they teach are incredibly effective.",
      rating: 4,
      service: "Typing Classes"
    },
    {
      id: 4,
      name: "David Williams",
      role: "Parent of Guitar Student",
      avatar: "https://i.pravatar.cc/150?img=12",
      quote: "My son has flourished under the guidance of his guitar instructor. The personalized approach has kept him engaged and excited about learning music.",
      rating: 5,
      service: "Guitar Lessons"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-primary">Students</span> Say</h2>
          <p className="text-gray-600">Hear from our community of music and typing students about their learning experiences.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 overflow-hidden">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            
            <div className="h-[300px] overflow-hidden relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <blockquote className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                          <p className="text-gray-600">{testimonial.role}</p>
                          <span className="hidden md:inline text-gray-400">•</span>
                          <p className="text-accent">{testimonial.service}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;