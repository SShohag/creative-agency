import React, { useEffect, useState } from 'react';
import nashPatrik from "../../../images/nashPatrik.png";
import miriam from "../../../images/miriam.png";
import malone from "../../../images/malone.png";
import ClientFeedbacks from '../ClientFeedbacks/ClientFeedbacks';



const ClientFeedback = () => {

    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/userReviews')
        .then(res => res.json())
        .then(data => {
            data.slice(0, 5)
            setUserReviews(data);
        })
    }, [])
    return (
        <section className="feedback-container mt-5 pt-5">
            <div className="text-center">
                <h2>Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
            </div>
            <div className="row mt-5 ml-2">
                {
                    userReviews.map(review=> <ClientFeedbacks review={review} key={review._id}></ClientFeedbacks>)
                }
            </div>
        </section>
    );
};

export default ClientFeedback;