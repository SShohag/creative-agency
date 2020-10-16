import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";



const Services = () => {
  const [addedServices, setAddedServices] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then( res => res.json())
    .then( data => setAddedServices(data))
  },[])


  return (
    <section className="service-container">
      <div className="text-center mt-5 pt-2">
        <h2>
          Provide awesome <span style={{ color: "#7AB259" }}>Services</span>
        </h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className=" w-75 row mt-5 pt-5">
          {addedServices.map((service) => (
            <ServiceDetail key={service._id} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
