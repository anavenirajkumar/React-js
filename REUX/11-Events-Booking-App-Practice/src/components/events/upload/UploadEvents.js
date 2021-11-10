import React, { useState } from "react";
import { useDispatch } from "react-redux";  // import
import { useHistory } from "react-router-dom";   // import
import {uploadEvents} from "../../../redux/events/events.actions";   // import

let UploadEvents = () => {
    let userInfo = JSON.parse(localStorage.getItem('user')); ///
    let {isAdmin} = userInfo; ///

   
    let dispatch = useDispatch();
    let history = useHistory()
    let [event , setEvent] = useState({
        name : '',
        image : '',
        type : '',
        price : '',
        date : '',
        info : ''

    });

    // handle input
    let handleInput = (e) => {
        setEvent({
            ...event,
            [e.target.name] : e.target.value
        });
    }

    // submitUpload
    let submitUpload = (e) => {
        e.preventDefault();
        dispatch(uploadEvents(event , history));
    };
   return(
       <React.Fragment>
           {/* <pre>{JSON.stringify(event)}</pre> */}
           <div className="container mt-4">
              <div className="row">
                  <div className="col animated zoomIn">
                     <p className="h3">Upload Events</p>
                     <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, maiores fuga deserunt inventore ex aperiam, voluptatibus repudiandae, aspernatur perferendis ipsa libero rem laudantium. Tempore alias velit voluptatibus et eum doloribus!</p>
                  </div>
              </div>
              {
                  isAdmin ? <React.Fragment>
                                <div className="row">
                 <div className="col-md-12 animated slideInUp">
                     <div className="card">
                           <div className="card-header bg-dark text-white">
                               <p className="h4">Upload Here</p>
                           </div>
                           <div className="card-body">
                                   <form onSubmit={submitUpload}>
                                        <div className="form-group">
                                            <input 
                                            required
                                            name = "name"
                                            value={event.name}
                                            onChange={handleInput}
                                            type="text" className="form-control" placeholder="Name"/>
                                            
                                        </div>
                                        <div className="form-group">
                                            <input
                                            required
                                            name = "image"
                                            value={event.image}
                                            onChange={handleInput}
                                            type="text" className="form-control" placeholder="Image"/> 
                                        </div>
                                        <div className="form-group">
                                            <select 
                                            required
                                            name = "type"
                                            value={event.type}
                                            onChange={handleInput}
                                            className="form-control">
                                                <option value="">Select Event Type</option>
                                                <option value="FREE">Free Event</option>
                                                <option value="PRO">Pro Event</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            required
                                            name = "price"
                                            value={event.price}
                                            onChange={handleInput}
                                            type="number" className="form-control" placeholder="Price"/> 
                                        </div>
                                        <div className="form-group">
                                            <input
                                            required
                                            name = "date"
                                            value={event.date}
                                            onChange={handleInput}
                                            type="date" className="form-control"/> 
                                        </div>
                                        <div className="form-group">
                                            <textarea 
                                            required
                                            name = "info"
                                            value={event.info}
                                            onChange={handleInput}
                                            rows="4" className="form-control" placeholder="Information"></textarea>
                                        </div>
                                        <div>
                                           <input
                                           required
                                            type="submit" className="btn btn-dark btn-sm" value="Upload"/>
                                        </div>
                                   </form>      
                           </div>
                     </div>
                 </div>
              </div>
                             </React.Fragment> : <React.Fragment>
                                 <div className="row">
                                     <div className="col text-center">
                                        <p className="h5 text-danger">-----------You are not Authorized to upload-----------</p>
                                        <p>if you are an admin, please contact DBA Admin</p>
                                     </div>
                                 </div>
                             </React.Fragment>
              }
              
           </div>

       </React.Fragment>
   );
};
export default UploadEvents;