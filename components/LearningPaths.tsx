import { cn } from "@/lib/utils";

type LevelCardProps = {
  level: string;
  description: string;
  className?: string;
  gradient: string;
};

function LevelCard({
  level,
  description,
  className,
  gradient,
}: LevelCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-8 h-full",
        gradient,
        className
      )}
    >
      <div className="relative z-10">
        <h3 className="text-white font-bold text-xl mb-3">{level}</h3>
        <p className="text-white/90">{description}</p>
      </div>
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}

export function LearningPaths() {
  const levels = [
    {
      level: "BRAND NEW",
      description: "Got two left feet? Start with our 10-day intro program.",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      level: "BEGINNER",
      description: "Got the basics down? Level up with new moves and routines.",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-500",
    },
    {
      level: "INTERMEDIATE",
      description:
        "Feel pretty confident? Learn more challenging skills and pieces.",
      gradient: "bg-gradient-to-br from-purple-500 to-violet-500",
    },
    {
      level: "ADVANCED",
      description:
        "Already killin' it? Train with the top choreographers in the game.",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ee6352] mb-4">
            Step-by-Step Learning For All Levels
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting out or you've got some training under
            your belt - we got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <LevelCard
              key={index}
              level={level.level}
              description={level.description}
              gradient={level.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
