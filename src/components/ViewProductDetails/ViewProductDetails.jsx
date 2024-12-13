import { useLoaderData } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import StarRatings from "react-star-ratings";
import { addCard } from "../Utils";
import { wishCard } from "../utils/index2";
import { Helmet } from "react-helmet-async";

const ViewProductDetails = () => {
 
  const newData = useLoaderData()
  console.log(newData);
 
  

 const handleAddCard = props => {
  addCard(props)
 }
 const handleWishCard = props => {
  wishCard(props)
 }

  return (
    <div>
      <Helmet>
        <title>Card details  | Home | Gadget Heaven</title>
      </Helmet>
      <div className="rounded-xl container mb-96 mx-auto">
        <div className=" relative rounded-b-xl bg-purple-600 text-white">
          <div className="max-w-4xl text-center pb-60 space-y-5 mx-auto">
            <h2 className="text-5xl font-bold">Product Details</h2>
            <p className="font-medium max-w-2xl mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>

        <div className="w-3/5 mt-10 bg-slate-200 absolute right-[20%] border top-40 mx-auto p-3 rounded-xl">
          <div className="flex border gap-5 rounded-xl">
            <div className="w-2/5 border rounded-xl">
              <img
                className="w-full h-full rounded-lg"
                src={newData.product_image}
                alt=""
              />
            </div>
            <div className="w-3/5 bg-white p-3 rounded-xl space-y-4 border">
              <h2 className="text-3xl font-bold text-black">
                {newData.product_title}
              </h2>
              <p className="font-semibold">Price: ${newData.price}</p>
              <p className="px-3 text-nowrap border text-green-600 rounded-full w-24 bg-green-100 border-green-400">
                {newData.availability ? "In Stack" : "Out Stack"}
              </p>
              <p className="text-gray-400">{newData.description}</p>
              <p className="text-xl font-semibold">Specification:</p>
              <ol className="text-gray-400">
                <li>1. {newData.specification[0]}</li>
                <li>2. {newData.specification[1]}</li>
                <li>3. {newData.specification[2]}</li>
                <li>4. {newData.specification[3]}</li>
              </ol>
              <p className="text-lg font-semibold">Rating:</p>
              <div className="flex items-center gap-6">
              <StarRatings
                rating={newData.rating}
                starRatedColor="orange"
                starDimension="30"
                numberOfStars={5}
                name="rating"
              />
              <p className="bg-slate-200 px-2 py-1 rounded-full font-bold">{newData.rating}</p>
              </div>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => handleAddCard(newData)}
                  className="flex items-center gap-2 bg-purple-600 py-2 px-3 rounded-full text-white font-semibold">
                  Add To Card
                  <span className="text-lg">
                    <MdOutlineShoppingCart />
                  </span>
                </button>
                <button 
                onClick={() => handleWishCard(newData)}
                className="text-xl p-3 border rounded-full">
                  <IoMdHeartEmpty />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductDetails;
//<MdOutlineShoppingCart />
