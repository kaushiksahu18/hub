import { TestimonialCard } from "./ui/TestimonialCard";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The dance classes here are incredible! I've improved so much in just a few months.",
    service: "Dance",
  },
  {
    name: "Michael Chen",
    text: "The vocal training helped me discover my true voice. Amazing experience!",
    service: "Singing",
  },
  {
    name: "Emma Davis",
    text: "I never thought I could paint until I took classes here. Now I can't stop creating!",
    service: "Painting",
  },
];

export function Testimonials({id}:{id:string}) {
  return (
    <section id={id} className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#ee6352]">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              service={testimonial.service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
