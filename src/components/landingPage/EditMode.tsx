import "./landingpage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBolt, faWandMagicSparkles, faXmark } from '@fortawesome/free-solid-svg-icons';


const EditMode () => {

    const CloseEditMode = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <nav className="edit-features">
        <li>
            <span>HD</span>
            Quality
        </li>
        <li>
            <span><FontAwesomeIcon icon={faBox}/></span>
            Grid
        </li>
        <li>
        <span><FontAwesomeIcon icon={faBolt}/></span>
            Flash
        </li>
        <li>
        <span><FontAwesomeIcon icon={faWandMagicSparkles}/></span>
            Filter
        </li>
        <li onClick={CloseEditMode}>
        <span><FontAwesomeIcon icon={faXmark}/></span>
            Close
        </li>
    </nav>
    )
}

export default EditMode;