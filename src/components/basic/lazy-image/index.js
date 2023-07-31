import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LazyImage = (props) => {
  const { src, width, height, alt, className } = props;
  const [error, setError] = useState(false);

  const onImageError = (err) => {
    setError(true);
  };

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <div className={`lazy-image-container ${props.containerClass}`}>
      <img
        src={
          !error
            ? src
            : "https://via.placeholder.com/295x295?text=Image+Not+Available"
        }
        onError={(err) => onImageError(err)}
        width={width}
        height={height}
        alt={alt || "No image available"}
        className={className}
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default LazyImage;
