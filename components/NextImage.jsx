import Image from "next/image";

const NextImage = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export default NextImage;
