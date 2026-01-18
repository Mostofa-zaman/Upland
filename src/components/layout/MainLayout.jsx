import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import Footer from "../footer/Footer";



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
