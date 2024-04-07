import React from "react";
import web from "../src/adra.jpg"
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto"></div>
           <div className="row gy-4">
        {
            Sdata.map((val,ind)=>{
                return <Card key={ind} imgrc={val.imgrc} tittle={val.tittle} link={val.link}/>
            })
        }
         </div>
           </div>
        </div>
        
      
    </>
  );
};
export default Service;
