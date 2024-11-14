"use client";
import Image from "next/image";
import { Image as ImageType } from "@/type";
import { Tab } from "@headlessui/react";
import React from "react";
import GalleryTab from "./gallery-tab";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: ImageType[];
  isHorizontal: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images, isHorizontal }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels
        className={cn(`w-full`, isHorizontal ? "aspect-[2/1]" : "aspect-[1/1]")}
      >
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div
              className={cn(
                `relative h-full w-full sm:rounded-lg overflow-hidden`,
                isHorizontal ? "aspect-[2/1]" : "aspect-[1/1]"
              )}
            >
              <Image
                fill
                src={image.url}
                alt="img"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
