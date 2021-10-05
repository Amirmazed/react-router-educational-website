import React from "react";

import Amir from "../Amir/Amir";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import Banner from "./../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Amir></Amir>
      <Footer></Footer>
    </div>
  );
};

export default Home;
