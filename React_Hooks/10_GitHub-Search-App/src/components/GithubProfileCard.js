import React from "react";

let GithubProfileCard = (props) => {
    return(
        <React.Fragment>
            <div className="card">
                <img src={props.profile.avatar_url} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h4">{props.profile.name}</p>
                    <p>{props.profile.bio}</p>
                    <a href={props.profile.html_url} className="btn btn-success btn-sm" target="_blank">Profile</a>
                </div>
            </div>
        </React.Fragment>
    )
};
export default GithubProfileCard;
