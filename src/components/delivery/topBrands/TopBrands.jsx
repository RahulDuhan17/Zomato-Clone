import React from "react";
import PrevArrow from "../../commonFiles/carousel/PrevArrow";
import NextArrow from "../../commonFiles/carousel/NextArrow";
import Slider from "react-slick";
import "./TopBrands.css";

const topBrandslist = [
  {
    id: 1,
    title: "KFC",
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png?output-format=webp",
  },
  {
    id: 2,
    title: "Subway",
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp",
  },
  {
    id: 3,
    title: "Bikanervala",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp",
  },
  {
    id: 4,
    title: "Chaayos",
    time: "17 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp",
  },
  {
    id: 5,
    title: "La Pino'z Pizza",
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp",
  },
  {
    id: 6,
    title: "Burger King",
    time: "43 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png",
  },
  {
    id: 7,
    title: "Third Wave Coffee",
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b01a4b2aa64d9d01fa79e2f49eb20083_1679987662.png",
  },
  {
    id: 8,
    title: "RollsKing",
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1cbe03ee1c6933e8fb2021cd835e889d_1624021602.png",
  },
  {
    id: 9,
    title: "Biryani Blues",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7fdbbe0f4f0aff0bb3775f3ac819ecb0_1638424082.png",
  },
  {
    id: 10,
    title: "Starbucks Coffee",
    time: "19 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/28650b1e4109f8a6ad34c5fc5cb5b2a7_1602854588.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandslist.map((brand) => {
          return (
            <div>
              <div key={brand} className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.title}
                />
              </div>
              <div key={brand.title} className="top-brand-title">{brand.title}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
