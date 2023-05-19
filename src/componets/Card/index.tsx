import { useNavigate } from "react-router-dom";
import { Link } from "../Link";

type CardProps = {
  id: number;
  imageSrc: string;
  title: string;
  premiered: string;
  rating: number;
};


export const Card = (props: CardProps) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/details/" + props.id);
    };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img src={props.imageSrc} alt="" className="mb-2" />
      <div>
        <h2 className="text-xl text-gray-600 font-bold">{props.title}</h2>
        <p className="text-sm text-gray-600">Premiered: {props.premiered}</p>
        <p className="text-sm text-gray-600">Rating: {props.rating}</p>
      </div>
      <Link label="Read more..." onClick={handleClick} />
    </div>
  );
};
