import React, { useState } from "react";

const useImageLoader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const onLoad = () => setImageLoaded(true);
  return {
    imageLoaded,
    onLoad,
  };
};

export default useImageLoader;
