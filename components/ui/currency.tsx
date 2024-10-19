"use client"
import { formatter } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface CurrencyProps {
  value?: number | string;
} 

const Currency: React.FC<CurrencyProps> = ({
  value
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

    return (
        <>
            {formatter.format(Number(value))}
        </>
    );
};

export default Currency;