import React from "react";
import './ClientFeedbacks.css'

const ClientFeedbacks = ({ review }) => {
  return (
    <div className=" feedbacks w-100 h-50 col-md-3 ml-5 mt-5">
      <div className="row d-flex">
        <div className="col-md-3">
            <img style={{height: '80px'}} src={review.userImg} alt="" />
        </div>
        <div className="ml-3 mt-3">
          <h4> {review.name} </h4>
          <h6> {review.designation} </h6>
        </div>
      </div>
      <div className="feedback-body">
      <p>
        {review.description}
      </p>
      </div>
    </div>
  );
};

export default ClientFeedbacks;
