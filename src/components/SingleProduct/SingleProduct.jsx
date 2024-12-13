import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const SingleProduct = ({product}) => {
  
  const {product_title, product_image, price, product_id} = product
  return (
    
      <div className="card border">
  <figure className="px-5 pt-5">
    <img
      src={product_image}
      alt="Shoes"
      className="rounded-xl border w-full h-[300px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{product_title}</h2>
    <p className="font-semibold">Price: ${price}</p>
    <div className="card-actions">
      <NavLink to={`/show/${product_id}`}><button className="py-2 px-8 hover:bg-purple-600 hover:text-white border border-purple-600 rounded-full">View Details</button></NavLink>
    </div>
  </div>
</div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.object,
  
};

export default SingleProduct;

