import Image from "next/image";

const imageLoader = ({ src, width, quality = 75 }) => {
  return `${src}?w=${width}&q=${quality}`;
};

const NextImage = ({ src, alt, width, height }) => {
  return (
    <Image
      loader={imageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      unoptimized
    />
  );
};

export default NextImage;
