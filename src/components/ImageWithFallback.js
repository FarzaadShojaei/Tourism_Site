import React, { useState } from 'react';

const ImageWithFallback = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className, 
  style,
  onError,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = (e) => {
    setHasError(true);
    setIsLoading(false);
    
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
      setHasError(false);
    } else {
      // Use a data URI as final fallback
      const defaultFallback = `data:image/svg+xml;base64,${btoa(`
        <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="600" fill="#f0f0f0"/>
          <rect x="350" y="250" width="100" height="100" fill="#667eea" opacity="0.3"/>
          <text x="400" y="320" font-family="Arial, sans-serif" font-size="16" fill="#667eea" text-anchor="middle">Image</text>
          <text x="400" y="340" font-family="Arial, sans-serif" font-size="16" fill="#667eea" text-anchor="middle">Not Available</text>
        </svg>
      `)}`;
      setImgSrc(defaultFallback);
    }
    
    if (onError) {
      onError(e);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  return (
    <div className="image-container" style={{ position: 'relative', ...style }}>
      {isLoading && !hasError && (
        <div 
          className="image-loading"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f0f0f0',
            color: '#667eea',
            fontSize: '14px'
          }}
        >
          Loading...
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          ...style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
        {...props}
      />
    </div>
  );
};

export default ImageWithFallback;
