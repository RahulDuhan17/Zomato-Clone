import Filters from "../commonFiles/filters/Filters";
import { LuSettings2 } from "react-icons/lu";
import { LuArrowUpDown } from "react-icons/lu";
import "./Delivery.css";
import DeliveryCollections from "./deliveryCollections/DeliveryCollections";
import TopBrands from "./topBrands/TopBrands";
import Explore from "../commonFiles/explore/Explore";
import { restaurants } from "../../data/Restaurants";

const deliveryFilters = [
  {
    id: 1,
    icon: <LuSettings2 className="absolute-center"/>,
    title: "Filters",
  },
  {
    id: 2,
    title: "rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon:<LuArrowUpDown />
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantList = restaurants

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters}/>
      </div>
      <DeliveryCollections />
      <TopBrands />
      <Explore list={restaurantList} collectionName={`Delivery Restaurants in Delhi`}/>
    </div>
  );
};

export default Delivery;
