import Image from "next/image";
import { imageLoader } from "./loader";

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
