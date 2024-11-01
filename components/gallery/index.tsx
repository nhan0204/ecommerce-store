"use client";
import Image from "next/image";
import { Image as ImageType } from "@/type";
import { Tab } from "@headlessui/react";
import React from "react";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
        <Tab.Panels className="aspect-[2/1] w-full">
            {images.map((image) => (
            <Tab.Panel key={image.id}>
                <div className="aspect-[2/1] relative h-full w-full sm:rounded-lg overflow-hidden">
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
