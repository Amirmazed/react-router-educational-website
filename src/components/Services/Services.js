import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import Footer from "../Footer/Footer";

const Services = () => {
  const [teams, setTeams] = useState("");
  const [allTeams, setAllTeams] = useState([]);
  // const handleChange = (e) => {
  //   const searchText = e.target.value;
  //   setTeams(searchText);
  //   console.log(e.target.value);
  // };

  useEffect(() => {
    fetch
    
    ('./products.json')
    
      .then((res) => res.json())
      .then((data) => setAllTeams(data?.teams));
  }, [teams]);
  return (
      <div>
      <MenuBar></MenuBar>
          <div className="container all-teams">
    
    
    <div className="teams">
      <div className="row">
        {allTeams?.map((pd) => (
          <div className="col-md-4">
            <div className="cart">
              <div className="cart-details">
                <img className="w-50" src={pd.strTeamBadge} alt="" />
              </div>
              <div className="text-area">
                
                <h4>course name: {pd.name}</h4>
                <h2>price: {pd.price}</h2>
                <button className="btn btn-success">Purchase</button>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  </div>
  <Footer></Footer>
      </div>
    
  );
};

export default Services;
