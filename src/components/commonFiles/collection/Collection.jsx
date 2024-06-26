import React from "react";
import { FaCaretRight } from "react-icons/fa";
import "./Collection.css";
import Slider from "react-slick";
import PrevArrow from "../carousel/PrevArrow";
import NextArrow from "../carousel/NextArrow";

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

const Collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            delhi, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Delhi</div>
            <FaCaretRight className="absolute-center" />
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  className="collection-image"
                  alt={item.title}
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.places}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
