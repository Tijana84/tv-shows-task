type ImageProps = {
  src: string;
};

export const Image = ({ src }: ImageProps) => {
  return (
    <img className="absolute inset-0 w-full h-full cursor-pointer" src={src} alt="image" />
  );
};
