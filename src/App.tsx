
import LandingPage from './components/landingPage/landingPage'
// import './App.css'
import { useState, FC, Dispatch, SetStateAction } from "react";
import EditMode from './components/landingPage/EditMode';


interface EditProps {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const App: FC<EditProps> = (props) =>  {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <LandingPage isOpen={props.isOpen} setIsOpen={props.setIsOpen}/>
    <EditMode isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  )
}

export default App;
