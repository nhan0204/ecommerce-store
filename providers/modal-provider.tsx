"use client"
import PreviewModal from '@/components/preview-modal';
import React, { useEffect, useState } from 'react' 

const ModalProvider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

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