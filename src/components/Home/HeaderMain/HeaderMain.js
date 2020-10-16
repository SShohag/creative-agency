import React from 'react';
import frame from "../../../images/logos/Frame.png"

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Let's Grow Your <br/> Brand to The Next Level</h1>
                <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis similique dolorum dolorem aperiam nemo illum assumenda, eum veniam fugit temporibus?</p>
                <br/>
                <button className="btn btn-brand">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;