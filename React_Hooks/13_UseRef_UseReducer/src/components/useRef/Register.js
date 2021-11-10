import React, {useRef} from "react";
import image from '../../assets/img/card_1.jpg';

let Register = () => {
    let imageEl = useRef(null);

    let clickButton = () => {
        console.log(imageEl.current);
    };

    return(
        <React.Fragment>
            <img ref={imageEl} src={image} alt="" width="200" height="100"/>
            <button onClick={clickButton} className="bnt btn-success btn-sm">click</button>
        </React.Fragment>
    )
};
export default Register;
