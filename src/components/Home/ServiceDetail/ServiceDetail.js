import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {
    console.log(service)
    // const {description, title} = props.service;
    const[loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const handleService = title =>{
        if(loggedInUser){
            history.push(`/order/${title}`)
        }
    }
    return (
        <div className=" h-100 col-md-4 text-center mr-auto">
                <button onClick={()=> handleService(service.title)}>
                    <img style={{height:"75px"}} src={`http://localhost:5000/${service.img}`} alt=""/>
                    <h4> {service.title} </h4>
                    <p> {service.description} </p>
                </button>
        </div>
    );
};

export default ServiceDetail;