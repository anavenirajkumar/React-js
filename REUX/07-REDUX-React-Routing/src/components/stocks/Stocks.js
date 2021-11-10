import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchStocks} from "../../redux/stocks/stocks.actions";
import {STOCK_FEATURE_KEY} from "../../redux/stocks/stocks.reducer";
import {Link} from "react-router-dom";
import Spinner from "../spinner/Spinner";

let Stocks = () => {
    let dispatch = useDispatch();
    let stockInfo = useSelector((state) => {
        return state[STOCK_FEATURE_KEY];
    });

    useEffect(() => {
        dispatch(fetchStocks());
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Stocks Info</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae deserunt doloremque excepturi inventore ipsa magni molestias officia, officiis possimus quasi, quidem repellat sit vero? Debitis expedita ipsum maiores mollitia repellat.</p>
                    </div>
                </div>
                {
                    stockInfo.loading ? <Spinner/> : <React.Fragment>
                        <div className="row">
                            <div className="col">
                                {
                                    stockInfo.stocks.length > 0 ?
                                        <React.Fragment>
                                            <table className="table table-hover text-center table-striped table-light">
                                                <thead className="bg-dark text-white">
                                                <tr>
                                                    <th>Stock Id</th>
                                                    <th>Name</th>
                                                    <th>Market</th>
                                                    <th>Industry</th>
                                                    <th>Symbol</th>
                                                    <th>Sector</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    stockInfo.stocks.map((stock) => {
                                                        return (
                                                            <tr key={stock.id}>
                                                                <td>{stock.id}</td>
                                                                <td>
                                                                    <Link to={`/stocks/${stock.id}`} className="text-primary font-weight-bold">{stock.name}</Link>
                                                                </td>
                                                                <td>{stock.market}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.symbol}</td>
                                                                <td>{stock.sector}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                </tbody>
                                            </table>
                                        </React.Fragment> : null
                                }
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
};
export default Stocks;
