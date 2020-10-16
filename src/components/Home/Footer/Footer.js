import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="contact w-100 h-100 mt-5 pt-5">
           <div className="d-flex container">
               <div className=" col-md-6 section-header">
                    <h2>Let us handle your project professionally</h2>
                    <p>With well written codes, we build amazing apps for all platforms mobile and web apps in general.</p>
               </div>
               <div className="col-md-6">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name/ company's name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-brand"> Send </button>
                       </div>
                   </form>
               </div>
           </div>
           <div className="text-center mt-5">
                <p>copyrights orange labs 2020 </p>
            </div>
       </section>
    );
};

export default Footer;