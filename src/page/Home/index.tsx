import { useEffect, useState } from "react";
import { Header } from "../../componets/Header";
import { Title } from "../../componets/Title";
import { CardData } from "../../componets/CardData";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
const response = await fetch("http://api.tvmaze.com"); 
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header/>
      <Title text="Hello" />
      <CardData data={data} />
    </div>
  );
};
