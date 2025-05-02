import Link from "next/link";
import { Button } from "@/components/ui/button";
import GalleryPage from "@/app/gallery/page";
import { Testimonials } from "@/components/Testimonials";
import { LearningPaths } from "@/components/LearningPaths";
import { FloatingNavbar } from "@/components/navbar";
import Footer from "@/components/footer";

// #50d4e3 blue
// #ee6352 red

export default function Home() {
  return (
    <FloatingNavbar>
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-[url(https://cdn.prod.website-files.com/5dbb40d6d8c97447e9450447/61cb62b743a7564c79d61be4_PRODUCT_THUMBNAIL-min.jpg)] bg-cover bg-top py-20 text-white">
          <div className="container mx-auto px-4 text-center py-16">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl text-white">
              Discover Your Passion
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white">
              Join our community and explore a variety of courses designed to
              help you grow, learn, and thrive.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#ee6352] text-white hover:bg-[#50d4e3] hover:text-black"
            >
              <Link href="/register">Enroll Now</Link>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="gallery" className="w-full">
          <GalleryPage />
        </section>

        {/* Testimonials Section */}
        <Testimonials id="testimonials" />

        {/* Learning Paths Section */}
        <LearningPaths />

        {/* Call to Action */}
        <section className="w-full h-[30vh] md:h-[70vh] relative">
          <div className="container mx-auto px-4 text-center absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <h2 className="mb-2 md:mb-6 text-lg md:text-3xl font-bold">
              <span className="text-[#ee6352]">Ready to Get Started?</span>
            </h2>
            <Button
              asChild
              size="lg"
              className="bg-[#ee6352] text-white hover:bg-[#50d4e3] hover:text-black"
            >
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
          <img
            src="https://cdn.prod.website-files.com/5dbb40d6d8c97447e9450447/6782cad8de58d941c4940f19_footwork-follow-along-2-2697-basic.jpg"
            className="h-full w-[100%] absolute right-0 top-0 object-cover object-bottom z-[-100]"
          />
        </section>
      </main>
      <Footer />
    </FloatingNavbar>
  );
}
