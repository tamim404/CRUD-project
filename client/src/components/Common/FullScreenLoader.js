import React, {Component} from 'react';
import loader from "../../assets/img/loader.svg";

class FullScreenLoader extends Component {
    render() {
        return (

                <div className="ProcessingDiv">
                    <div className="center-screen">
                        <img className="loader-size" src={loader}/>
                    </div>


            </div>
        );
    }
}

export default FullScreenLoader;