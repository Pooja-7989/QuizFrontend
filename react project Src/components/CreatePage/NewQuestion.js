import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './NewQuestion.css'; // Import the CSS file
import { FaTrash } from 'react-icons/fa'; // Import the trash icon

const NewQuestion = ({ onCancel }) => {
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

    return (
        <div className="new-question-container">
            <h2 className="title">New Question</h2>
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
                <button onClick={onCancel} className="save-button">Cancel</button>
                <button onClick={addOption} className="save-button">Add Option</button>
                <button onClick={saveQuestion} className="save-button">Save</button>
            </div>
        </div>
    );
};

export default NewQuestion;