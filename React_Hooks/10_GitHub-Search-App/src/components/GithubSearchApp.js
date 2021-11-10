import React, {useState} from "react";
import Axios from "axios";
import {clientID, clientSecret} from "./githubCredentials";
import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";

let GithubSearchApp = () => {
    let [username , setUsername] = useState('');
    let [profile , setProfile] = useState({});
    let [repos , setRepos] = useState([]);

    let searchUser = (e) => {
        e.preventDefault();
        searchProfile(username);
        searchRepos(username);
    };

    let searchProfile = (username) => {
        let dataURL = `http://api.github.com/users/${username}?clientId=${clientID}&clientSecret=${clientSecret}`;
        Axios.get(dataURL).then((response) => {
            setProfile(response.data);
        }).catch((err) => {
            console.error(err);
        });
    };

    let searchRepos = (username) => {
        let dataURL = `http://api.github.com/users/${username}/repos?clientId=${clientID}&clientSecret=${clientSecret}`;
        Axios.get(dataURL).then((response) => {
            setRepos(response.data);
        }).catch((err) => {
            console.error(err);
        });
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Github Search</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline" onSubmit={searchUser}>
                                    <div className="form-group">
                                        <input
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            size="40" type="search" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div>
                                        <input
                                            type="submit" value="Search" className="btn btn-secondary btn-sm"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            Object.keys(profile).length > 0 ?
                                <React.Fragment>
                                    <GithubProfile profile={profile}/>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        {
                            repos.length > 0 ?
                                <React.Fragment>
                                    <GithubRepos repos={repos}/>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default GithubSearchApp;
