import { useNavigate } from "react-router-dom";
import { Card } from "../../../../utils/types";

type Props = {
  card: Card;
};

export const HomeCard = (props: Props) => {
  const navigation = useNavigate();

  const handleMore = () => {
    navigation("/s");
  };

  const { imageSrc, title, premiered, rating } = props.card;

  return (
    <div className="w-36 flex-col rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
  <div className="relative h-48 w-full mb-6">
    <img className="absolute inset-0 w-full h-full" src={imageSrc} alt="Card image" />
  </div>
  <div className="flex flex-col items-center justify-center">
  <h3 className="flex-grow mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    {title}
  </h3>
  <p className="flex-grow mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Premiered: {premiered}
  </p>
  <p className="flex-grow mb-4 text-base text-neutral-600 dark:text-neutral-200">
    Rating: {rating}
  </p>
  <a
    href="#!"
    onClick={handleMore}
    className="text-blue-800 hover:text-blue-400"
  >
    Read more...
  </a>
</div>
    </div>
  );
};
