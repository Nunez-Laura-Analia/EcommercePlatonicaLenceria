import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
    return(
        <div>
            <Spinner>
                <span>Cargando...</span>
            </Spinner>
        </div>
    )
}

export default Loader