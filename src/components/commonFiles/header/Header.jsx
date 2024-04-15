import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <IoLocationOutline className="absolute-center location-icon" />
              <div>Delhi</div>
            </div>
            <FaCaretDown className="absolute-center" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
            <CiSearch className="absolute-center search-icon" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/750/b89c7b416f76920220187d3b9ba74750.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">Rahul</span>
          <MdKeyboardArrowDown className="absolute-center profile-options-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
