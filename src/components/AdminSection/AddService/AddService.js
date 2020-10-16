import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Order/Sidebar/Sidebar";

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
      
        fetch('https://limitless-meadow-31971.herokuapp.com/addService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

  return (
    <section className="">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <div className="ml-5">
                        <div className="d-flex justify-content-between">
                            <h5>Add Service</h5>
                            <div className="d-flex">
                                <img style={{ height: '40px', width: '40px' }} className="img-circle mr-2" src={loggedInUser.userImg} alt="" />
                                <h5>{loggedInUser.name}</h5>
                            </div>
                        </div>
                        <div className="py-5" style={{backgroundColor:'lightGray'}}>
                            <form onSubmit = {handleSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Title</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="title" id="title" aria-describedby="emailHelp" placeholder="Title"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Description</label>
                                    <input onBlur={handleBlur} type="text" class="form-control" name="description" id="description" placeholder="Description"/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Upload</label>
                                    <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture"/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default AddService;
