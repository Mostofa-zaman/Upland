import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import Footer from "../footer/Footer";
import Banner from "../banner/Banner";


const MainLayout = () => {
  return (
     <>
      <Navigation /> 
      <Outlet />      
      <Footer />       
    </>
  );
};

export default MainLayout;
