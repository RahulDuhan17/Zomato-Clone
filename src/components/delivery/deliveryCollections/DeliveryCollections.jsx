import React from "react";
import "./DeliveryCollections.css";
import PrevArrow from "../../commonFiles/carousel/PrevArrow";
import NextArrow from "../../commonFiles/carousel/NextArrow";
import Slider from "react-slick";
import DeliveryItem from "./deliveryItem/DeliveryItem";

const deliveryItems = [
  {
    id: 1,
    title: "Pizza",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/2a3/b7c9d7e4898706a8f407813f83b792a3.jpg?output-format=webp",
  },
  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/017/8824610521847d3cdaba501f1b567017.jpeg",
  },
  {
    id: 3,
    title: "Sandwich",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/0c8/aa786576453a4531e6b454137ef4f0c8.jpg",
  },
  {
    id: 4,
    title: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/90e/47cbbc1cbfd97310241bd4e155f7990e.jpg",
  },
  {
    id: 5,
    title: "Coffee",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/0b2/f56b1d2a978f0953fcf54b84c39280b2.jpg",
  },
  {
    id: 6,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/0db/6c26dc50878d6a88408daf51d5a670db.jpg",
  },
  {
    id: 7,
    title: "Poha",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/48a/5dfde7f80fb843a5e009585892bfc48a.jpeg",
  },
  {
    id: 8,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/1ad/31fd3ebbadb046954dd3b4c137a0f1ad.jpg",
  },
  {
    id: 9,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/pictures/5/21057975/3a1115eb0e44873450a3567a440edd8a_o2_featured_v2.jpg?output-format=webp",
  },
  {
    id: 10,
    title: "Idli",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/70d/ebc094273c957feb68f3417240e8270d.jpg",
  },
  {
    id: 11,
    title: "Cold Coffee",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/2df/c71281d58290d71275b702708a96d2df.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
      <div className="max-width">
        <div className="collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem key={item} item={item}/>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryCollections;
