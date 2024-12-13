import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import '.././Categories/Categories.css'
// import { Link } from "react-router-dom";

const Categories = ({categorys}) => {
    return (
        <div className="md:flex flex-col space-y-3">
         {
          categorys.map(category => <NavLink
            key={category.product_id}
            to={`/category/${category.category}`}><button className="border text-nowrap border-purple-600 px-6 w-full rounded-full py-3">{category.category}</button></NavLink>)
         }
    </div>
    );
};

Categories.propTypes = {
  categorys: PropTypes.object,
};
export default Categories;