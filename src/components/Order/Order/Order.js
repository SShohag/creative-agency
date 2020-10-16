import React, { useContext } from 'react';
import './Order.css'
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Order = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {Name} = useParams();
    const { handleSubmit, register, errors } = useForm();
    const history = useHistory();

    const onSubmit = data =>{
        fetch('https://limitless-meadow-31971.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then( res => res.json())
        .then( success => {
            if(success){
                alert('Your Order is Successfully Completed')
                history.push("/service")
            }
        } )
    }
    

    return (
        <section className="">
            <div className="row">
               
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                
                  <div className="ml-2">
                        <div className="d-flex justify-content-between">
                            <h6>Order</h6>
                            <div className="d-flex">
                                <h6>{loggedInUser.name}</h6>
                            </div>
                        </div>
                    

                    <div>
                        <form className="ml-5 py-5" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input ref={register({ required: true })} type="text" name="name" id="name" defaultValue={loggedInUser.name} className="form-control w-50" placeholder="Your name / Company's name "/>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input ref={register({ required: true })} type="text" name="email" id="email" defaultValue={loggedInUser.email} className="form-control w-50" placeholder="Your email address"/>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input ref={register({ required: true })} type="text" name="projectName" id="projectName" defaultValue={Name}  className="form-control w-50" placeholder="Project Name"/>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea ref={register({ required: true })} name="details" id="details" className="form-control w-50" row="2" col="2" placeholder="Project details"></textarea>
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group d-flex w-50">
                                <input ref={register} type="text" name="price" id="price" className="form-control" placeholder="Price"/>
                                    
                                <input ref={register}  type="file" name="file" id="file" class="inputfile" />
                                    <label for="file"><FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Upload project file </label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-brand"> Send </button>
                            </div>
                        </form>
                    </div>
                  </div>
               </div>
            </div>
        </section>
        
    );
};

export default Order;