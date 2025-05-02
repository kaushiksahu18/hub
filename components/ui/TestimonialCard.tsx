import { cn } from "@/lib/utils";

type TestimonialProps = {
  name: string;
  text: string;
  service: string;
  className?: string;
};

// #50d4e3 blue
// #ee6352 red

export function TestimonialCard({ name, text, service, className }: TestimonialProps) {
  return (
    <div className={cn("bg-white p-6 rounded-lg shadow-md", className)}>
      <p className="text-gray-600 italic mb-4">"{text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-[#ee6352] text-sm">{service}</p>
        </div>
        <div className="text-[#ee6352]">★★★★★</div>
      </div>
    </div>
  );
}