import { Card } from "../Card";

export const CardData = () => {
  const cards = [
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      title: "Under the Dome",
      premiered: "2013-06-24",
      rating: 6.5,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      title: "Person of Interest",
      premiered: "2011-09-22",
      rating: 8.8,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
      title: "Bitten",
      premiered: "2014-01-11",
      rating: 7.5,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
      title: "Arrow",
      premiered: "2012-10-10",
      rating: 7.4,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/445/1114021.jpg",
      title: "True Detective",
      premiered: "2014-01-12",
      rating: 8.2,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/272/681441.jpg",
      title: "The 100",
      premiered: "2014-03-19",
      rating: 7.7,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/230/575652.jpg",
      title: "Homeland",
      premiered: "2011-10-02",
      rating: 8.2,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/73.jpg",
      title: "Glee",
      premiered: "2009-05-19",
      rating: 6.6,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg",
      title: "Revenge",
      premiered: "2011-09-21",
      rating: 7.7,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/69/174906.jpg",
      title: "Grimm",
      premiered: "2011-10-28",
      rating: 8.4,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/189/474715.jpg",
      title: "Gotham",
      premiered: " 2014-09-22",
      rating: 7.8,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/137.jpg",
      title: "Lost Girl",
      premiered: "2010-09-12",
      rating: 8.1,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/448/1121792.jpg",
      title: "The Flash",
      premiered: "2014-10-07",
      rating: 7.6,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/184.jpg",
      title: "Continuum",
      premiered: "2012-05-27",
      rating: 8.1,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/0/154.jpg",
      title: "Constantine",
      premiered: "2014-10-24",
      rating: 7.6,
    },
    {
      imageSrc:
        "https://static.tvmaze.com/uploads/images/medium_portrait/48/122260.jpg",
      title: "Penny Dreadful",
      premiered: "2014-05-11",
      rating: 8.3,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          premiered={card.premiered}
          rating={card.rating}
        />
      ))}
    </div>
  );
};
