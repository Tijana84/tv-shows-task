type ImageProps = {
  src: string;
};

export const Image = ({ src }: ImageProps) => {
  return (
    <img className="absolute inset-0 w-48  cursor-pointer" src={src} alt="image" />
  );
};
