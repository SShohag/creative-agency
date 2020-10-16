import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://limitless-meadow-31971.herokuapp.com/order?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <section className="">
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <div className="ml-5">
            <div className="d-flex justify-content-between">
              <h2>Your Service List</h2>
              <div className="d-flex">
                <h4>{loggedInUser.name}</h4>
              </div>
            </div>
            <hr />
            <div className="mt-2 py-5">
              <div className="row">
                {orders.map((order) => (
                  <div key={order._id} className="col-md-6 my-3">
                    <div className="card">
                      <div className="card-body p-3 text-center">
                        <h3 className="card-title">{order.projectName}</h3>
                        <p className="text-secondary">{order.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
