import "./landingpage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faBox, faBolt } from '@fortawesome/free-solid-svg-icons';



const LandingPage = () => {
    return (
        <>
        <main className="main-container">
            <header>
                <button className="btn">
                    <span><FontAwesomeIcon icon={faPen}/></span>
                    Edit
                </button>
            </header>
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
                <span><FontAwesomeIcon icon={faBox}/></span>
                    Filter
                </li>
                <li></li>
            </nav>
           
        </main>
        </>
    )
}

export default LandingPage;