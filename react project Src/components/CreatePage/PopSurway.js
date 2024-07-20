import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './NewQuestion.css'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon


const Popup = ({ closePopup }) => {
  const [showFirstPopup, setShowFirstPopup] = useState(true);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ text: '', correct: false }]);
  const [points, setPoints] = useState(1);

  const handleQuestionChange = (value) => {
    setQuestion(value);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = options.map((option, i) => {
      if (i === index) {
        return { ...option, text: event.target.value };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleCorrectChange = (index) => {
    const newOptions = options.map((option, i) => ({
      ...option,
      correct: i === index,
    }));
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, { text: '', correct: false }]);
  };

  const deleteOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const saveQuestion = () => {
    const questionData = {
      question,
      options,
      points,
    };
    console.log(questionData);
  };
  const handleFirstPopupClose = () => {
    setShowFirstPopup(false);
    // setShowSecondPopup(true);
    // closePopup();
  };

  

  return (

    <div className="new-question">
      <Modal show={showFirstPopup} onHide={handleFirstPopupClose}>

        <Modal.Header>
          <Modal.Title >Select a Quiz Type</Modal.Title>
          <span className="close-btn" onClick={closePopup}>&times;</span>
        </Modal.Header>
        <Modal.Body>
          <div className="question-type">
            <label>Question Type: Single Choice (Radio Button)</label>
            <label>
              Points:
              <input
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                className="points-input"
              />
            </label>
          </div>
          <div className="question-input">
            <ReactQuill
              value={question}
              onChange={handleQuestionChange}
              placeholder="Enter your question here"
              className="question-textarea"
            />
          </div>
          <div className="options-container">
            {options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, e)}
                  placeholder={`Option ${index + 1}`}
                  className="option-input"
                />
                <input
                  type="radio"
                  name="correctOption"
                  checked={option.correct}
                  onChange={() => handleCorrectChange(index)}
                  className="correct-radio"
                />
                <a href="#" onClick={() => deleteOption(index)} id='trash'>
                  <FaTrash className="glyphicon" />
                </a>
              </div>
            ))}
          </div>
          <div className="button-container">
            <button onClick={closePopup} className="save-button">Cancel</button>
            <button onClick={addOption} className="save-button">Add Option</button>
            <button onClick={saveQuestion} className="save-button">Save</button>
          </div>

        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Popup;