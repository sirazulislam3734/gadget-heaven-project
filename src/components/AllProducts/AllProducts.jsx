import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from '../SingleProduct/SingleProduct'
import Img from '../../assets/assets/download (15).jpeg'
import { useEffect, useState } from "react";



const AllProducts = () => {
  const products = useLoaderData()
  const {category} = useParams();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    if(category){
      const categoryFilter = [...products.products].filter(card => card.category == category);
    setCards(categoryFilter)
    }
    else{
      setCards(products.products)
    }
    
  },[category,products.products])
  
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg">
      {
        cards?.map(product => <SingleProduct 
          key={product?.product_id}
          product={product}></SingleProduct>)
      }
    </div>
    {
    cards.length > 0 ?'':<><img src={Img} className="w-[500px]" alt="" /></>
  } 
    </div>
  );
};

export default AllProducts;