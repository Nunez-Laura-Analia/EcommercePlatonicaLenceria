import React from "react";
import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
    return(
        <div>
            <Spinner color='danger'/>
        </div>
    )
}

export default Loader