                    // This Is Class Base Example Only One
import React from "react";

class CounterClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        };
    }

    incrCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h1>Counter : {this.state.counter}</h1>
                                    <button onClick={this.incrCounter} className="btn btn-success btn-sm">Click</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default CounterClass;
