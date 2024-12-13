
import second from '../assets/assets/17905759.gif'

import { useEffect, useState } from "react";
import { getAllWish, removeCardWish } from './utils/index2';

const DashboardWish = () => {
    const [wishList, setWishList] = useState([]);
    useEffect(()=>{
        const wishCards = getAllWish()
        setWishList(wishCards)
      }, [])

    const handleRemoveWish = id => {
        removeCardWish(id)
        const wishCards = getAllWish()
        setWishList(wishCards)
    }
    
    return (
        <div className="px-40 mb-10">
            {
            wishList.map((cardShow) => (
                <div key={cardShow.product_id} className='flex justify-between mb-5 p-3 rounded-xl items-center border'>
                    <div className="flex items-center gap-5">
                        <img
                        className="w-20 rounded-xl h-20 object-cover"
                         src={cardShow.product_image}
                          alt="" />
                        <div className=''>
                        <p className='text-xl m-2 font-bold'>{cardShow.product_title}</p>
                        <p className="text-gray-400 m-2">Price: ${cardShow.price}</p>
                        <p className="text-gray-400 m-2">{cardShow.description}</p>
                        </div>
                        </div>
                        <div>
                            <button>
                                <img
                                onClick={() => handleRemoveWish(cardShow.product_id)}
                            className='w-10 h-10'
                             src={second}
                              alt="" /></button>
                        </div>
                </div>
            ))
        }
        </div>
    );
};

export default DashboardWish;