import { useEffect, useState } from "react";
import { Header } from "../../componets/Header";
import { Title } from "../../componets/Title";
import { Card } from "../../componets/Card";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://api.tvmaze.com/shows");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Title text="Hello" />
      {data.map((card: any, index) => (
        <Card
          id={card.id}
          key={index}
          imageSrc={card.image.medium}
          title={card.name}
          premiered={card.premiered}
          rating={card.rating.average}
        />
      ))}
    </div>
  );
};
