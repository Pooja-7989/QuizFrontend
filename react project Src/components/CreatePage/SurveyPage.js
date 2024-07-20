import React, { useState } from "react";
import "./SurveyPage.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import PopSurway from'./PopSurway';





export default function SurveyPage() {

  const [isVisible1, setIsVisible1] = useState(true);
  const [divs, setDivs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [inputValue, setInputValue] = useState(name);
  const [showPopup,setShowPopup] = useState(false)

  const closePopup =() => setShowPopup(false)

  const handleClose = () => {
    setIsVisible1(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setInputValue(name);
  };

  const handleSaveClick = () => {
    setName(inputValue);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };



  const addDiv = () => {
    const newDiv = { id: divs.length, content: `Div ${divs.length + 1}` };
    setDivs([...divs, newDiv]);
  };

  const removeDiv = (id) => {
    setDivs(divs.filter(div => div.id !== id));
  };

 





  return (
    <div>
        {isVisible1 && (
          <div className="outputbar">
            <div className="titleBar">
              <div>
                <p >page 1</p>
              </div>
              <div >
                <span style={{ display: "flex", justifyContent: "space-around" }}>
                  {isEditing ? (                       // this code is for edit functionality
                    <div style={{ margin: "0px 10px" }}>
                      <input style={{ width: "100%", height: "28px", borderRadius: "5px" }}
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                      <button onClick={handleSaveClick}>Save</button>
                    </div>
                  ) : (
                    <div style={{ margin: "0px 10px" }}>
                      <h1>{name}</h1>
                      {/* <button onClick={handleEditClick}> */}
                      <svg onClick={handleEditClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square-fill" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                      </svg>
                      {/* </button> */}
                    </div>
                  )}
                  
                  <svg  onClick={handleClose}  xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="optionBar">
              <div class="drpdown ">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Add Item
                </button>
                <ul class="dropdown-menu">
                  <li onClick={() => setShowPopup(true)} class="dropdown-item"> Quiz page</li>
                  {showPopup && <PopSurway closePopup={closePopup} />}
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="dropdown ">
          <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Add Page
          </button>
          <ul class="dropdown-menu">
            <li onClick={addDiv} class="dropdown-item" >Add Quize</li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div>
          {divs.map((div) => (
            <div key={div.id}>
              {isVisible1 && (
                <div className="outputbar">
                  <div className="titleBar">
                    <div>
                      <p >page 1</p>
                    </div>
                    <div>
                      <span style={{ display: "flex", justifyContent: "space-around" }}>
                        {isEditing ? (                       // this code is for edit functionality
                          <div style={{ margin: "0px 10px" }}>
                            <input style={{ width: "200px", height: "28px", borderRadius: "5px" }}
                              type="text"
                              value={inputValue}
                              onChange={handleInputChange}
                            />
                            <button onClick={handleSaveClick}>Save</button>
                          </div>
                        ) : (
                          <div style={{ margin: "0px 10px" }}>
                            <h1>{name}</h1>
                            <svg onClick={handleEditClick} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square-fill" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                            </svg>
                          </div>
                        )}
                        <svg onClick={() => removeDiv(div.id)} xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="optionBar">
                    <div class="drpdown ">
                      <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Add Item
                      </button>
                      <ul class="dropdown-menu">
                        <li   class="dropdown-item" >Quiz Page</li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              <div className="dropdown ">
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Add Page
                </button>
                <ul class="dropdown-menu">
                  <li onClick={addDiv} class="dropdown-item" >Quiz page</li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              
            </div>            
          ))}
        </div>
    </div>
  )
}