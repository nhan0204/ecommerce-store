"use client";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/type";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  console.log(open);

  return (
    <Button
      onClick={onOpen}
      className="flex items-center gap-x-2 lg:hidden py-2"
    >
      Filters
      <Plus size={20} />
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        {/* <div className="fixed inset-0 bg-black bg-opacity-25" /> */}

        {/* Dialog possition */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-opacity-70 bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            {/* Render filters */}
            <div className="p-4">
              <Filter name="Sizes" filterKey="sizeId" data={sizes} />
              <Filter name="Colors" filterKey="colorId" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Button>
  );
};

export default MobileFilter;
