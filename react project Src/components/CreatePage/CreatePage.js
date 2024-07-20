import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './createPage.css';
import { Link } from 'react-router-dom';

const CreatePage = ({ closePopup }) => {
  const [showFirstPopup, setShowFirstPopup] = useState(true);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const handleFirstPopupClose = () => {
    setShowFirstPopup(false);
    setShowSecondPopup(true);
    // closePopup();
  };

  const handleSecondPopupClose = () => {
    setShowSecondPopup(false);
    closePopup();
  };

  return (
    <div className="popup-container1">  
      <Modal show={showFirstPopup} onHide={handleFirstPopupClose}>
        <Modal.Header>
          <Modal.Title id="popup-heading1">Select a Quiz Type</Modal.Title>
          <span className="close-btn" onClick={closePopup}>&times;</span>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <img style={{ width: "100%", height: "128px" }} src="https://img.freepik.com/free-vector/telecommuting-concept_23-2148488790.jpg?t=st=1719899861~exp=1719903461~hmac=7946f22c8404160df9b1ed54b5609c8c8dbb68c95bff0130efc9e6b4af428c4c&w=740" alt="shinchan" />
                  <p className="card-text">Create any type of quiz for learners to take independently during a set time frame</p>
                  <div className='button'>
                    <Button className="btn-btn-primary2" variant="secondary" onClick={handleFirstPopupClose}>classic</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body"> 
                  <img style={{ width: "100%" }} src="https://t4.ftcdn.net/jpg/02/90/10/51/240_F_290105177_pUyjikyqnESD8EpYvEZvMShchY4OqkAW.jpg" alt="shin" />
                  <p className="card-text">Build and host a live quiz game to play with learners in real-time</p>
                  <div className='button2'>
                    <Button className="btn-btn-primary2" variant="secondary" onClick={handleFirstPopupClose}>live</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showSecondPopup} >
        <Modal.Header >
          <Modal.Title>New quiz</Modal.Title>
          <span className="close-btn" onClick={closePopup}>&times;</span>
        </Modal.Header>
        <Modal.Body>
          <input id="input" type="text" placeholder="Enter title for your quiz" />
        </Modal.Body>
        <Modal.Footer>
          <div className="div">
            <Button className="btn-btn-primary3" variant="secondary" onClick={handleSecondPopupClose}>Cancel</Button>
            <Link to={'/nav'}><Button className="btn-btn-primary2" variant="secondary" onClick={handleSecondPopupClose}>Create Quiz</Button></Link>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreatePage;