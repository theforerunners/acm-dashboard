import Image from "next/image";

const photos = [
  "/technizenGroup.jpg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export default function PhotoGallery() {
  return (
    <section
      id="gallery"
      className="min-h-1/2 flex items-center justify-center bg-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Photo Gallery
        </h2>
        <div className="flex flex-col gap-y-2 gap-x-2 sm:gap-x-8 sm:gap-y-8">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {[...photos, ...photos].map((photo, index) => (
                <div
                  key={index}
                  className="w-[150px] sm:w-[300px] flex-shrink-0 mx-1 sm:mx-2 overflow-hidden"
                >
                  <Image
                    src={photo || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...photos, ...photos].map((photo, index) => (
                <div
                  key={index}
                  className="w-[150px] sm:w-[300px] flex-shrink-0 mx-1 sm:mx-2 overflow-hidden"
                >
                  <Image
                    src={photo || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-full rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
