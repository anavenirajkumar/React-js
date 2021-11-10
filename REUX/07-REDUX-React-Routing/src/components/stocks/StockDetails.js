import React, {useState} from "react";
import {useSelector} from "react-redux";
import {STOCK_FEATURE_KEY} from "../../redux/stocks/stocks.reducer";
import {Link, useParams} from 'react-router-dom';

let StockDetails = () => {
    let [stockId , setStockId] = useState(useParams().id);

    // fetching data from Redux Store
    let selectedStockInfo = useSelector((state) => {
        let stocks = state[STOCK_FEATURE_KEY].stocks;
        let singleStock = stocks.find((stock) => {
            return stock.id === stockId;
        });
        return singleStock;
    });

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3">Stock Details</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, animi atque consequatur culpa distinctio eius expedita hic illo illum magni maxime nemo nobis officia officiis porro soluta tempora, totam.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(selectedStockInfo).length !== 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-dark text-white">
                                            <p className="h4">{selectedStockInfo.name}</p>
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <ul className="list-group">
                                                        <li className="list-group-item list-group-item-dark">
                                                            NAME : {selectedStockInfo.name}
                                                        </li>
                                                        <li className="list-group-item list-group-item-dark">
                                                            Market : {selectedStockInfo.market}
                                                        </li>
                                                        <li className="list-group-item list-group-item-dark">
                                                            Industry : {selectedStockInfo.industry}
                                                        </li>
                                                        <li className="list-group-item list-group-item-dark">
                                                            Symbol : {selectedStockInfo.symbol}
                                                        </li>
                                                        <li className="list-group-item list-group-item-dark">
                                                            Sector : {selectedStockInfo.sector}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <Link to="/stocks" className="btn btn-dark btn-sm">Back</Link>
                                        </div>
                                    </div>
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default StockDetails;
