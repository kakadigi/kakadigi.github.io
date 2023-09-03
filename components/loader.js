export const imageLoader = ({ src, width, quality = 75 }) => {
  return `${src}?w=${width}&q=${quality}`;
};
