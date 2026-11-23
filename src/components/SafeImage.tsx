import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const RELIABLE_FALLBACK = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = RELIABLE_FALLBACK, 
  className = '', 
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [failedOnce, setFailedOnce] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setFailedOnce(false);
  }, [src]);

  const handleError = () => {
    if (!failedOnce && imgSrc !== fallbackSrc) {
      setFailedOnce(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};
