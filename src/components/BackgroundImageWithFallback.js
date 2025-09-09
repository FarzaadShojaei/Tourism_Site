import React, { useState, useEffect } from 'react';

const BackgroundImageWithFallback = ({ 
  src, 
  fallbackSrc = '/images/placeholder-hero.svg',
  children,
  className,
  style,
  ...props 
}) => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setBackgroundImage(fallbackSrc);
      setIsLoading(false);
      return;
    }

    const img = new Image();
    
    img.onload = () => {
      setBackgroundImage(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setBackgroundImage(fallbackSrc);
      setIsLoading(false);
    };
    
    img.src = src;
  }, [src, fallbackSrc]);

  const combinedStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(102, 126, 234, 0.7), rgba(118, 75, 162, 0.7)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    ...style
  };

  return (
    <div className={className} style={combinedStyle} {...props}>
      {isLoading && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px',
            zIndex: 1
          }}
        >
          Loading destination...
        </div>
      )}
      {children}
    </div>
  );
};

export default BackgroundImageWithFallback;
