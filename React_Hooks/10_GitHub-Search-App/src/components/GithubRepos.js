import React from "react";

let GithubRepos = (props) => {
    return(
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <p className="h4 text-secondary">Your Repositories</p>
                </div>
            </div>
            {
                Object.keys(props).length > 0 ?
                    <React.Fragment>
                        <div className="row">
                            <div className="col">
                                <div className="card mt-3">
                                    <div className="card-header">
                                        <p className="h4">Your Repositories</p>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-group">
                                            {
                                                props.repos.map((repo) => {
                                                    return(
                                                        <li key={repo.name} className="list-group-item d-flex justify-content-around">
                                                            <p className="h5">
                                                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                            </p>
                                                            <span className="badge badge-success">{repo.stargazers_count} Stars</span>
                                                            <span className="badge badge-primary">{repo.watchers_count} Watches</span>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
};
export default GithubRepos;
