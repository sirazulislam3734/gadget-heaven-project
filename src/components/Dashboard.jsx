import { useState } from "react";
import DashboardCard from "./DashboardCard";
import DashboardWish from "./DashboardWish";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

  const [card, setAvailable] = useState({
    available: true,
    status: "card",
  });
  const handleAvailableStatus = (status) => {
    if (status == "card") {
      setAvailable({
        available: true,
        status: "card",
      });
    } 
    else {
      setAvailable({
        available: false,
        status: "Wishlist",
      });
    }
  };
  
  return (
    <div>
      <Helmet>
        <title>Dashboard  | Gadget Heaven</title>
      </Helmet>
      <div className="rounded-xl mx-auto container">
      <div className="pt-5 bg-purple-600 rounded-b-xl text-white mb-8">
      <div className="max-w-4xl text-center pb-10 space-y-5 mx-auto">
        <h2 className="text-5xl font-bold">Dashboard</h2>
        <p className="font-medium max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="space-x-4">
        <button onClick={() => handleAvailableStatus("card")} className={card.available?"py-2 rounded-xl px-6  border-white text-purple-600 bg-white font-semibold":"py-2 rounded-xl px-6  border-white text-white font-semibold"}>Card</button>
        <button onClick={() => handleAvailableStatus("Wishlist")} className={card.available?"py-2 rounded-xl px-6 border-white text-white font-semibold":"py-2 rounded-xl px-6  border-white text-purple-600 bg-white font-semibold"}>Wishlist</button>
        </div>
      </div>
      </div>
      {
        card.available?<DashboardCard></DashboardCard>:<DashboardWish></DashboardWish>
      }
    </div>
    
    </div>
  );
};

export default Dashboard;