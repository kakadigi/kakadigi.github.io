export const imageLoader = ({ src, width, quality = 75 }) => {
  return `https://kakadigi.github.io${src}?w=${width}&q=${quality}`;
};
