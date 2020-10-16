import React from "react";
import "./Review.css";
import { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data) => {
    fetch("https://limitless-meadow-31971.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <section className="">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="ml-2">
            <div className="d-flex justify-content-between">
              <h5>Orders Review</h5>
              <div className="d-flex">
                <h4>{loggedInUser.name}</h4>
              </div>
            </div>
            <div className="">
              <form className="mt-5 py-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <input
                    ref={register({ required: true })}
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={loggedInUser.name}
                    className="form-control p-3 w-75"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    ref={register({ required: true })}
                    type="image"
                    name="userImg"
                    id="userImg"
                    defaultValue={loggedInUser.userImg}
                    className="form-control p-3 w-75"
                    src={loggedInUser.userImg}
                    placeholder="Your Photo"
                    alt=""
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    ref={register({ required: true })}
                    type="text"
                    name="designation"
                    id="designation"
                    className="form-control p-3 w-75"
                    placeholder="Designation / company Name"
                  />
                  {errors.title && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    ref={register({ required: true })}
                    name="description"
                    id="description"
                    className="form-control p-3 w-75"
                    id="description"
                    cols="20"
                    rows="3"
                    placeholder="Description"
                  ></textarea>
                  {errors.description && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group">
                  <button type="submit" className="btn-brand">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
