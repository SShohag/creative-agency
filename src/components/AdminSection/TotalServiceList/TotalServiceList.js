import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Order/Sidebar/Sidebar";

const TotalServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [totalOrders, setTotalOrders] = useState([]);

  useEffect(() => {
    fetch("https://limitless-meadow-31971.herokuapp.com/totalOrders")
      .then((res) => res.json())
      .then((data) => setTotalOrders(data));
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
              <h4>Service List</h4>
              <div className="d-flex">
                <h4>{loggedInUser.name}</h4>
              </div>
            </div>
            <div className="mt-5">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project Details</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {totalOrders.map((order) => (
                    <tr key={order._id}>
                      <td>{order.name}</td>
                      <td>{order.email}</td>
                      <td>{order.title}</td>
                      <td>{order.description}</td>
                      <td>OK</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalServiceList;
