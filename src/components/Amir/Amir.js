import React, { useEffect, useState } from "react";
import "./Amir.css";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import Footer from "../Footer/Footer";

const Amir = () => {
  const [teams, setTeams] = useState("");
  const [allTeams, setAllTeams] = useState([]);


  useEffect(() => {
    fetch
    
    ('./products.json')
  
      .then((res) => res.json())
      .then((data) => setAllTeams(data?.teams));
  }, [teams]);
  return (

    <div>
        <h1>Our top services</h1>
        <div className="container all-teams">
      
      <div className="teams">
        <div className="row">
          {allTeams?.slice(1,5).map((pd) => (
            <div className="col-md-6">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-50" src={pd.strTeamBadge} alt="" />
                </div>
                <div className="text-area">
                  <h4>course name: {pd.name}</h4>
                  <p>{pd.strAlternate}</p>
                  <h2>price: {pd.price}</h2>
                 
                  {/* <Link to={`/details/${pd.idTeam}`}>
                    <button className="btn btn-success">Details</button>
                  </Link> */}
                  <button className="btn btn-success">Purchase</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       
    </div>
    
  );
};

export default Amir;
