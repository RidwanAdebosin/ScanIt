import "..//src/components/landingPage/landingpage.css";
import { useState, FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faBox, faBolt, faWandMagicSparkles, faTimes } from '@fortawesome/free-solid-svg-icons';

interface EditProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
}

const LandingPage: FC<EditProps> = ({ isOpen, setIsOpen }): JSX.Element => {
  const toggleEditMode = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="main-container">
      <header onClick={toggleEditMode} aria-label="Toggle Menu">
        <button className="btn">
          <span><FontAwesomeIcon icon={faPen}/></span>
          Edit
        </button>
      </header> 
      {isOpen && <EditMode setIsOpen={setIsOpen} />}
    </main>
  );
};

const EditMode: FC<{ setIsOpen: (isOpen: boolean) => void }> = ({ setIsOpen }): JSX.Element => {
  const closeEditMode = () => {
    setIsOpen(false);
  };

  return (
    <nav className="edit-features">
      <ul>
        <li key="HD">
          <span>HD</span>
          Quality
        </li>
        <li key="Grid">
          <span><FontAwesomeIcon icon={faBox}/></span>
          Grid
        </li>
        <li key="Flash">
          <span><FontAwesomeIcon icon={faBolt}/></span>
          Flash
        </li>
        <li key="Filter">
          <span><FontAwesomeIcon icon={faWandMagicSparkles}/></span>
          Filter
        </li>
        <li onClick={closeEditMode} key="Close">
          <span><FontAwesomeIcon icon={faTimes}/></span>
          Close
        </li>
      </ul>
    </nav>
  );
};

const App = () =>  {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LandingPage isOpen={isOpen} setIsOpen={setIsOpen} />
  );
};

export default App;
