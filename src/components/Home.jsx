
import { useLoaderData } from "react-router-dom";
import AllProducts from "./AllProducts/AllProducts"
import Header  from "./Header/Header";
import Categories from "./Categories/Categories";
import { Helmet } from "react-helmet-async";



const Home = () => {

  const {categorys} = useLoaderData({});
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Home | Gadget Heaven</title>
      </Helmet>
      <Header></Header>
      <div className="font-bold text-4xl text-center my-10">Explore Cutting-Edge Gadgets</div>
      <div className="flex gap-10 px-24">
        <Categories categorys={categorys} />
         <AllProducts></AllProducts>
      </div>
    </div>
  );
};

export default Home;