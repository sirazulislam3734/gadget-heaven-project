import { useState, useEffect } from "react";
import second from "../assets/assets/17905759.gif";
import { getAll, removeCard } from "./Utils";
import par from "../assets/assets/Group.png";

const DashboardCard = () => {
  const [money, setMoney] = useState(0);
  const [addCard, setAddCard] = useState([]);
  const [sortPrice, setSortPrice] = useState([]);

  // Fetch initial data and calculate total money
  useEffect(() => {
    const addCards = getAll();
    setAddCard(addCards);
    setSortPrice(addCards);
    const totalMoney = addCards.reduce((sum, card) => sum + (card.price || 0), 0);
    setMoney(totalMoney);
  }, []);

  const handleRemove = (id) => {
    removeCard(id);
    const updatedCards = getAll();
    setAddCard(updatedCards);
    setSortPrice(updatedCards);
    const updatedTotal = updatedCards.reduce(
      (sum, card) => sum + (card.price || 0),
      0
    );
    setMoney(updatedTotal);
  };

  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...addCard].sort((a, b) => b.price - a.price);
      setSortPrice(sorted);
    } else if (sortBy === "name") {
      const sorted = [...addCard].sort((a, b) =>
        a.product_title.localeCompare(b.product_title)
      );
      setSortPrice(sorted);
    }
  };

  return (
    <div>
      <div className="px-40 mb-10 flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Card</h2>
        </div>
        <div className="flex items-center gap-10">
          <div className="font-bold text-2xl">
            Total cost: <span>${money.toFixed(2)}</span>
          </div>
          <div>
            <button
              onClick={() => handleSort("price")}
              className="text-lg font-bold btn"
            >
              Sort by Price
            </button>
          </div>
          <div>
            <button
              className="bg-purple-600 px-8 py-3 rounded-xl text-lg border font-bold text-white hover:bg-white hover:text-purple-600"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Purchase
            </button>
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box text-center">
                <h3 className="font-bold text-center text-lg">
                  <img className="w-32 mx-auto" src={par} alt="Success Icon" />
                </h3>
                <h2 className="py-4 text-3xl font-bold">Payment Successful</h2>
                <p className="text-lg text-gray-400">Thanks for your purchase!</p>
                <p className="text-lg text-gray-400">Total: ${money.toFixed(2)}</p>
                <div className="py-3">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div className="px-40 mb-10">
        {sortPrice.map((cardShow) => (
          <div
            key={cardShow.product_id}
            className="flex justify-between mb-5 p-3 rounded-xl items-center border"
          >
            <div className="flex items-center gap-5">
              <img
                className="w-20 rounded-xl h-20 object-cover"
                src={cardShow.product_image}
                alt={cardShow.product_title}
              />
              <div>
                <p className="text-xl m-2 font-bold">{cardShow.product_title}</p>
                <p className="text-gray-400 m-2">Price: ${cardShow.price}</p>
                <p className="text-gray-400 m-2">{cardShow.description}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(cardShow.product_id)}
                className="mr-5"
              >
                <img className="w-10 h-10" src={second} alt="Remove" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
