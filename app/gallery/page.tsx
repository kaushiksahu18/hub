import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GallerySection } from "@/components/gallery-section";

import dancing01 from "./images/dancing01.jpeg";
import dancing02 from "./images/dancing02.jpg";
import dancing03 from "./images/pexels-cottonbro-6719012.jpg";
import dancing04 from "./images/pexels-mart-production-7894541.jpg";

import group01 from "./images/group01.jpeg";
import group02 from "./images/group02.jpeg";
import group03 from "./images/group03.jpeg";

import panting01 from "./images/panting01.jpeg";
import panting02 from "./images/panting02.jpeg";
import panting03 from "./images/panting03.jpeg";
import panting04 from "./images/panting04.jpeg";
import panting05 from "./images/pexels-ivan-samkov-6816531.jpg";
import panting_video01_th from "./images/panting-video01-th.jpeg";

import singing01 from "./images/singing01.jpg";
import singing02 from "./images/singing02.jpg";
import singing03 from "./images/singing03.jpg";
import singing04 from "./images/pexels-cottonbro-5648355.jpg";
import singing05 from "./images/pexels-nicola-barts-7943982.jpg";
import { Suspense } from "react";

export default function GalleryPage() {
  const dancingGallery = {
    title: "Dancing Gallery",
    images: [
      {
        src: group01,
        alt: "Dance performance on stage",
        width: 600,
        height: 400,
      },
      {
        src: dancing01,
        alt: "Ballet class in session",
        width: 600,
        height: 400,
      },
      {
        src: dancing02,
        alt: "Hip hop dance group",
        width: 600,
        height: 400,
      },
      {
        src: group03,
        alt: "Contemporary dance performance",
        width: 600,
        height: 400,
      },
    ],
    videos: [
      {
        id: "example1",
        title: "Annual Dance Recital Highlights",
        thumbnail: dancing03,
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "example2",
        title: "Dance Workshop Session",
        thumbnail: dancing04,
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  };

  const singingGallery = {
    title: "Singing Gallery",
    images: [
      {
        src: group02,
        alt: "Choir performance",
        width: 600,
        height: 400,
      },
      {
        src: singing01,
        alt: "Vocal training session",
        width: 600,
        height: 400,
      },
      {
        src: singing02,
        alt: "Solo performance",
        width: 600,
        height: 400,
      },
      {
        src: singing03,
        alt: "Recording studio session",
        width: 600,
        height: 400,
      },
    ],
    videos: [
      {
        id: "example3",
        title: "Annual Concert Highlights",
        thumbnail: singing04,
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        id: "example4",
        title: "Vocal Training Workshop",
        thumbnail: singing05,
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  };

  const pantingGallery = {
    title: "Panting Gallery",
    images: [
      {
        src: panting04,
        alt: "Panting facilities",
        width: 600,
        height: 400,
      },
      {
        src: panting01,
        alt: "Group fitness class",
        width: 600,
        height: 400,
      },
      {
        src: panting02,
        alt: "Personal training session",
        width: 600,
        height: 400,
      },
      {
        src: panting03,
        alt: "Weight training area",
        width: 600,
        height: 400,
      },
    ],
    videos: [
      {
        id: "example5",
        title: "Fitness Challenge Highlights",
        thumbnail: panting_video01_th,
        embedUrl: "/panting-video01.mp4",
      },
      {
        id: "example6",
        title: "Workout Tutorial Session",
        thumbnail: panting05,
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-primary">Gallery</span>
        </h2>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Tabs
          defaultValue="dancing"
          className="w-full py-8 px-2 md:px-8 lg:px-12"
        >
          <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3">
            {["dancing", "singing", "panting"].map((value, idx) => (
              <TabsTrigger value={value} key={idx}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="dancing">
            <GallerySection
              title={dancingGallery.title}
              images={dancingGallery.images}
              videos={dancingGallery.videos}
            />
          </TabsContent>
          <TabsContent value="singing">
            <GallerySection
              title={singingGallery.title}
              images={singingGallery.images}
              videos={singingGallery.videos}
            />
          </TabsContent>
          <TabsContent value="panting">
            <GallerySection
              title={pantingGallery.title}
              images={pantingGallery.images}
              videos={pantingGallery.videos}
            />
          </TabsContent>
        </Tabs>
      </Suspense>
    </div>
  );
}
