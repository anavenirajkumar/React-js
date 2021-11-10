import React, {useState} from "react";

let WishMessage = () => {
    let [message , setMessage] = useState('Hello');   //

    // Good Morning                  // 1 Method
    let sayGoodMorning = () => {
        setMessage('Good Morning');
    };
      
    // Good Evening                   // 3 Method Bind 
    let sayGoodEvening = (value) => {
        setMessage(value);
    };

    return(
        <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <div className="card">
                           <div className="card-body">
                                                        <h2>{message}</h2>

                               <button onClick={sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>

                               <button onClick={() => setMessage('Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button> 

                               <button onClick={sayGoodEvening.bind(this, 'Good Evening')} className="btn btn-danger btn-sm">Good Evening</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default WishMessage;
