import preloader from "../../../assets/images/preloader.svg";
import {FC} from "react";

const Preloader: FC = () => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader
