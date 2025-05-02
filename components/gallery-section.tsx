"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

interface ImageItem {
  src: StaticImageData
  alt: string
  width: number
  height: number
}

interface VideoItem {
  id: string
  title: string
  thumbnail: StaticImageData
  embedUrl: string
}

interface GallerySectionProps {
  title: string
  images: ImageItem[]
  videos: VideoItem[]
}
  // #50d4e3 blue
  // #ee6352 red

export function GallerySection({ title, images, videos }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#50d4e3]">{title}</h2>
      </div>

      {/* Images Section */}
      <div>
        <h3 className="rounded-md text-xl font-semibold bg-[#50d4e3]/10 text-[#ee6352] px-1 md:px-2">Images</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg"
              onClick={() => setSelectedImage(image)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video cursor-pointer">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div>
        <h3 className="rounded-md text-xl font-semibold bg-[#50d4e3]/10 text-[#ee6352] px-1 md:px-2">Videos</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden transition-all hover:shadow-lg"
              onClick={() => setSelectedVideo(video)}
            >
              <CardContent className="p-0">
                <div className="group relative aspect-video cursor-pointer">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-[#ee6352]/50 p-3 text-white">
                    <h4 className="text-sm font-medium">{video.title}</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl">
          {selectedVideo && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">{selectedVideo.title}</h3>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                ></iframe>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
