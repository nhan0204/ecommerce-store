"use client"
import PreviewModal from '@/components/preview-modal';
import React, { useEffect, useState } from 'react' 

interface ModalProviderProps {} 

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  })

  if (!isMounted) {
    return false;
  }

  return (
      <>
          <PreviewModal/>
      </>
  );
};

export default ModalProvider;