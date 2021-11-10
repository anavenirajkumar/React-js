import React, { Fragment, useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import ContactList from './ContactList';
import Axios from 'axios';

let ContactApp = () => {
    let [contact, setContact] = useState({
        contacts : [],
        errorMessage : '',
        selectedContact : {}
    });

    useEffect(()=>{
        let dataURL = `https://gist.githubusercontent.com/anavenirajkumar/5f9445833dbb235b96461fed3eb815a4/raw/82fbf3dadddd7499703329554095f434ed2f133c/Contact-List-09072020.json`
        Axios.get(dataURL).then((responce)=>{
            setContact({
                ...contact,
                contacts : responce.data
            })
        }).catch((err)=>{
            console.error(err);
             setContact({
                 ...contact,
                 errorMessage : err
             });
        });  
    }, []);

    // Receive Data From ContactList Component
    let receiveData = (providedContact) => {
       setContact({
           ...contact,
           selectedContact : providedContact
       })
    };
    return(
        <Fragment>
            {/* <pre>{JSON.stringify(contact.selectedContact)}</pre> */}
             <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <p className="h3 text-primary">Contact App</p>
                              {/* <pre>{JSON.stringify(contact.contacts)}</pre> */}
                       <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem et incidunt, ipsa itaque maxime minima minus natus, possimus quae, quos rerum tempora veritatis? Autem debitis molestias non repellat vel.</p>
                   </div>
               </div>
               <div className="row mt-3">
                   <div className="col-md-9">
                          {
                              contact.contacts.length > 0 ?
                                 <Fragment>
                                     <ContactList contacts={contact.contacts} sendData={receiveData}></ContactList>
                                 </Fragment> : null
                          }

                   </div>

                   <div className="col-md-3">
                          {
                              Object.keys(contact.selectedContact).length > 0 ?
                              <Fragment>
                                  <ContactCard selectedContact= {contact.selectedContact}></ContactCard>
                              </Fragment> : null
                          }
                   </div>
               </div>
           </div>

        </Fragment>
    )
}
export default ContactApp;