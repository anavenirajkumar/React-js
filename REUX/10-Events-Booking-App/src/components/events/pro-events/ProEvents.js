import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {EVENTS_FEATURE_KEY} from "../../../redux/events/events.reducer";
import {fetchProEvents} from "../../../redux/events/events.actions";
import Spinner from "../../root/spinner/Spinner";

let ProEvents = () => {
    let dispatch = useDispatch();

    let eventsInfo = useSelector((state) => {
        return state[EVENTS_FEATURE_KEY];
    });

    let {loading , events} = eventsInfo;

    useEffect(() => {
        dispatch(fetchProEvents());
    }, [dispatch]);
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col animated zoomIn">
                        <p className="h3 text-secondary">Pro Events</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis corporis dolores eius illo ipsam itaque laudantium libero molestias, mollitia nobis odit officia quas temporibus voluptatum. Corporis est iure perspiciatis!</p>
                        <p className="font-weight-bold">Total Pro Events : {events.length}</p>
                    </div>
                    {
                        loading ? <Spinner/> :
                            <React.Fragment>
                                <React.Fragment>
                                    {
                                        events.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    events.map((event) => {
                                                        return (
                                                            <div className="row mt-3" key={event._id}>
                                                                <div className="col animated slideInUp" key={event._id}>
                                                                    <div className="card">
                                                                        <img src={event.image} alt="" className="img-fluid"/>
                                                                        <div className="card-body">
                                                                            <div className="row">
                                                                                <div className="col">
                                                                                    <p className="h5 text-success">{event.name}</p>
                                                                                    <p className="h6">{event.date}</p>
                                                                                </div>
                                                                                <div className="col">
                                                                                    <button className="btn btn-success btn-sm">Book Now</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </React.Fragment> : null
                                    }
                                </React.Fragment>
                            </React.Fragment>
                    }
                </div>
            </div>
        </React.Fragment>
    );
};
export default ProEvents;
