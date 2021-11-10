import React, { Fragment, useState } from 'react';

let ChangeSelectBox = () => {

    let [option, updateOption] = useState('');

    return(
        <Fragment>
             <div className="container">
                     <div className="row">
                         <div className="col-md-6">
                             <div className="card">
                                       <div className="card-header bg-primary text-white text-center">
                                       <p className="h4">Change Select Box</p>
                                       </div>
                                    <div className="card-body">
                                         <div className="row">
                                             <div className="col">
                                                <form>
                                                         <div className="form-group">
                                                               <select onChange={(e)=>{updateOption(e.target.value)}} className="form-control"> 

                                                                    <option value="React JS">React JS</option> 
                                                                    <option  value="Angular">Angular</option> 
                                                                    <option value="Vue JS">Vue JS</option> 

                                                               </select>          
                                                         </div> 
                                                </form> 

                                             </div>
                                             <div className="col">
                                                      <p>{option}</p>
                                             </div>
                                             </div>     
                                   </div>   
                             </div>
                         </div>
                     </div>
                 </div>

        </Fragment>
    )
}
export default ChangeSelectBox;