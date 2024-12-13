import Section from "./components/Section";
import { Outlet} from "react-router-dom";
import Footer from "../src/components/Footer/Footer"
import {  Toaster } from 'react-hot-toast';
import Navbar from "./components/Navbar/Navbar";



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster></Toaster>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
};

export default App;