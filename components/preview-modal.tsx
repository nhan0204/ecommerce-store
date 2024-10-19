"use client";

import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import usePreviewModal from "@/hooks/use-preview-modal";
import React from "react";
import Gallery from "./gallery";

interface PreviewModalProps {}

const PreviewModal: React.FC<PreviewModalProps> = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  console.log(product);

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="items-start grid w-full grid-cols-1 lg:grid-cols-12  gap-x-6 lg:gap-x-8 lg:gap-y-8 ">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:cols-span-8 lg:col-span-7 sm:mt-4">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
