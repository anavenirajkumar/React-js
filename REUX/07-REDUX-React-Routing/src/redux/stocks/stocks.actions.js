import {FETCH_STOCKS_FAILURE, FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS} from "./stocks.actionTypes";
import Axios from "axios";

let fetchStocks = () => {
    return (dispatch) => {
        dispatch({ type : FETCH_STOCKS_REQUEST});
        let dataURL = 'https://gist.githubusercontent.com/thenaveensaggam/2783236a4ca0f625ad2d5e3226357c69/raw/e46c8f9a91d5aa25ca659e222dac2fb9776b761d/stocks-20-08-2020.json';
        Axios.get(dataURL).then((response) => {
            dispatch({ type: FETCH_STOCKS_SUCCESS , payload : response.data});
        }).catch((error) => {
            dispatch({ type : FETCH_STOCKS_FAILURE , payload: error});
        });
    }
};
export {fetchStocks};
