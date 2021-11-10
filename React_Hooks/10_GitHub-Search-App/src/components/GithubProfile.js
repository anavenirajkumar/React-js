import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile = (props) => {
    return(
        <React.Fragment>
                <div className="row">
                    <div className="col">
                        <p className="h4 text-secondary">Your Profile</p>
                    </div>
                </div>
                {
                    Object.keys(props).length > 0 ?
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-3">
                                    <GithubProfileCard profile={props.profile}/>
                                </div>
                                <div className="col-md-9">
                                    <GithubProfileDetails profile={props.profile}/>
                                </div>
                            </div>
                        </React.Fragment>: null
                }
        </React.Fragment>
    )
};
export default GithubProfile;
