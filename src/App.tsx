
import "..//src/components/landingPage/landingpage.css"
// import './App.css'
import { useState, FC, Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faBox, faBolt, faWandMagicSparkles, faXmark } from '@fortawesome/free-solid-svg-icons';

// import {EditProps} from "myTypes";


interface EditProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}  




function LandingPage: EditProps<FC>() {
  const [isOpen, setIsOpen] = useState(false);


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
};

function EditMode({isOpen, setIsOpen}) {

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


const App = () =>  {
  return (
    <>
    <LandingPage/>
    </>
  )
}

export default App;
