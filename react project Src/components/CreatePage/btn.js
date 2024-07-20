import React,{useState} from "react";
import './btn.css'
import CreatePage from "./CreatePage";
import Dashboard from "../PopUp/dashboard";

const Btn = () => {
  const [showPopup,setShowPopup] = useState(false)
  

  const closePopup =() => setShowPopup(false)



  return(
    <>
    <Dashboard/>
     <div className="App" >
    <h4 className="heading">Welcome to RAMANASOFT  Quiz-Test</h4>
    <button id="button1" onClick={() => setShowPopup(true)}>Create Quiz</button>
    {showPopup && <CreatePage closePopup={closePopup} />}
    </div>
    </>
   )
}
export default Btn