import { LuSettings2 } from "react-icons/lu";
import { LuArrowUpDown } from "react-icons/lu";
import "./NightLife.css"
import Filters from "../commonFiles/filters/Filters";
import Collection from "../commonFiles/collection/Collection";
import Explore from "../commonFiles/explore/Explore";
import { NightLifeData } from "../../data/NightLifeData"


const NightFilters = [
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

const collectionList = [
  {
    id: "1",
    title: "Top Trending Spots",
    cover:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810183.png",
    places:"22 places"
  },
  {
    id: "2",
    title: "Best of live screenings",
    cover:"https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg",
    places:"36 places"
  },
  {
    id: "3",
    title: "New In Town",
    cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png",
    places:"20 places"
  },
  {
    id: "4",
    title: "Dine For The Gram",
    cover:"https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png",
    places:"23 places"
  },
  {
    id: "5",
    title: "One Of A Kind Places",
    cover:"https://b.zmtcdn.com/data/collections/f25923193488d2884f8689f185d418ef_1705558811.png",
    places:"12 places"
  },
  {
    id: "6",
    title: "What A View",
    cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810570.png",
    places:"33 places"
  },
  {
    id: "7",
    title: "Cafe Catchups",
    cover:"https://b.zmtcdn.com/data/collections/92bf1f87ad0a90b94007e79b13eb592c_1705558517.png",
    places:"26 places"
  },
  {
    id: "8",
    title: "Owned By Celebs",
    cover:"https://b.zmtcdn.com/data/collections/24bfe934630bd441699f2d59990cd92b_1709810917.png",
    places:"10 places"
  }
]

const nightList = NightLifeData;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={NightFilters} />
      </div>
      <Explore list={nightList} collectionName='Nightlife Restaurants in Delhi'/>
    </div>
  )
}

export default NightLife