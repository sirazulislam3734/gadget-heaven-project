
import "./Header.css";
import bannerImg from '../../assets/assets/banner.jpg'

const Header = () => {
  return (
    <div className="container relative rounded-b-xl bg-purple-600 mb-96 text-white mx-auto  px-10 pb-52"> 
      <div className="pt-5 mb-8">
      <div className="max-w-4xl text-center space-y-5 mx-auto">
        <h2 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
        <p className="font-medium max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <button href="" className="font-bold py-2 px-8 bg-white text-purple-600 rounded-full">Shop Now</button>
      </div>
      </div>
      <div className="w-3/5 absolute right-[20%] border mx-auto p-4 rounded-xl">
        <img 
        className="w-full rounded-xl max-h-[470px]" 
        src={bannerImg} 
        alt="" />
      </div>
    </div>
  );
};

export default Header;
