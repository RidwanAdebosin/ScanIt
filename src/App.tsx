
import LandingPage from './components/landingPage/landingPage'
import './App.css'
import { useState } from "react";

function App(){
  const [isOpen, setIsOpen] = useState(false);
  return (
  <LandingPage isOpen={isOpen} setIsOpen={setIsOpen}/>
  )
}

export default App;
