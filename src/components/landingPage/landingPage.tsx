import "./landingpage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import EditMode from "./EditMode";



function LandingPage({isOpen, setIsOpen}) {

    const EditIsOpen = () => {
        setIsOpen(isOpen);
    }

    return (
        <>
        <main className="main-container">
            <header  onClick={EditIsOpen} aria-label="Toggle Menu">
                <button className="btn">
                    <span><FontAwesomeIcon icon={faPen}/></span>
                    Edit
                </button>
                <EditMode isOpen={isOpen} setIsOpen={setIsOpen}/>
            </header>

           
        </main>
        </>
    )
}

export default LandingPage;