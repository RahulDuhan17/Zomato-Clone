import { useState } from "react";
import Footer from "../../components/commonFiles/footer/Footer";
import Header from "../../components/commonFiles/header/Header";
import TabOptions from "../../components/commonFiles/tabOptions/TabOptions";
import Delivery from "../../components/delivery/Delivery"
import NightLife from "../../components/nightLife/NightLife"
import DiningOut from "../../components/diningOut/DiningOut"

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getCorrectScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "Night Life":
        return <NightLife />;
      default:
        return <Delivery />;
    }
  };

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default HomePage;
