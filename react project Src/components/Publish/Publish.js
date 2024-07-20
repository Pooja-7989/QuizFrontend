import React from 'react';
import "./publish.css";
import { useState } from 'react';
const Publish = () => {
  //button functionality
  const [buttonLabel, setButtonLabel] = useState('Publish');
    const handleClick = () => {
        if (buttonLabel === 'Publish') {
          if (window.confirm('Quiz successfully published')) {
            setButtonLabel('Close Quiz');
          }
        } else if (buttonLabel === 'Close Quiz') {
          if (window.confirm('Your quiz is now closed and respondent will be able to access it.           You can re-open yout quiz at a later time with the Re-open Quiz button')) {
            setButtonLabel('Re-open Quiz');
          }
        } else if (buttonLabel === 'Re-open Quiz') {
          if (window.confirm('Your quiz is now open again and respondents will be able to access it')) {
            setButtonLabel('Close Quiz');
          }
        }
      }
  const [showButtons, setShowButtons] = useState(false);
  const [showButtons1, setShowButtons1] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };





  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    setShowButtons(event.target.checked)
  }

  const handleCheckboxChange1 = (event1) => {
    setShowButtons1(event1.target.checked)

  }


  const [isRegisterChecked, setIsRegisterChecked] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText("https://www.flexiquiz.com/SC/N/12e840")
      .then(() => alert("URL copied to clipboard!"))
      .catch(() => alert("Failed to copy URL"));
    };

  
  return (
    <div className='App1'>
      <div className='main1' style={{marginTop:'50px'}}>
        <div className='status'>
          <h3 className='hd'>Quiz status</h3>
        </div>

        <div className='closed1'>
          <p>In Design</p>
        {/* button  */}
        <button className='x' onClick={handleClick}>{buttonLabel}</button><br />
        </div>
      </div>
      <div className='options1'>
        <div>
          <h3 className='hd'>Distribution</h3>
        </div>
        <div className='check1'>
          
          <div>
           <div>
             <input
             type="checkbox"
             id="quizLink"
             onChange={handleCheckboxChange1}
            //  checked={isRegisterChecked
            />
            <label htmlFor="quizLink">Quiz Link</label>
            <p className='b'>Copy and Share this your emaill,social media,website,blog etc</p>
           </div>
           {showButtons1 && (
      <div style={{ alignItems: 'center', marginBottom: '10px' }}>
        <label htmlFor="quizURL" style={{ marginRight: '10px' }}>URL</label>
        <input
          type="text"
          id="quizURL"
          value="https://www.flexiquiz.com/SC/N/12e840"
          readOnly
        />
        <button className='x' onClick={handleCopyClick} style={{ marginRight: '10px' }}>
          📋
        </button>

        <button className='a'>Customize URL</button><br/>
        
      <div style={{height:'50px'}}>
        <input
        className='check1'
          type="checkbox"
          id="registerForQuiz"
          // checked={isRegisterChecked}
          // onChange={handleCheckboxChange}
        />
        <label htmlFor="registerForQuiz">Register for quiz</label>
        <button className='a'>Customize Registration</button>
      </div>
      <p className='b'>Participants are requied to enter a first name,last name and optional email address to access your quiz.</p>
      <p className='b'>Or you can customize the fields with dates, passwords and more.</p>
    
    </div>
           )}
    </div><br/>
        
    {/* EMAIL INVITATIONS */}
          <input type="checkbox" id="email-invitations" />
          <label htmlFor="email-invitations">Email Invitations</label>
          <p className='b'>FlexiQuiz will send an email to your invitees. Completed quizzes are tracked using the Unique Link and invitees email address.</p><br /><br />
          <div>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
        />
        Users / Groups
        <p className='b'>Users login to their own customized portal to access assigned quizzes. Groups allow you to assign a group of users to your quiz. You will need to manually notify a user that a quiz has been assigned to their portal.</p>
      </label>
      {showButtons && (
        <div>
          <button className='x' onClick={openModal}>Create New user</button>
          {isModalOpen && (
        <div className="modal1">
          <div className="modal-content1">
            <span className="close-button1" onClick={closeModal}>&times;</span>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="userType">User type:</label>
              <select id="userType" name="userType">
                <option value="respondent">Respondent</option>
              </select><br /><br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" /><br /><br />
              
              <label htmlFor="firstName">First name:</label>
              <input type="text" id="firstName" name="firstName" />
              <label htmlFor="lastName">Last name:</label>
              <input type="text" id="lastName" name="lastName" /><br /><br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
              <label htmlFor="organization">Organization:</label>
              <input type="text" id="organization" name="organization" /><br /><br />
              <label htmlFor="assignedQuizzes">Assigned quizzes:</label>
              <input type="text" id="assignedQuizzes" name="assignedQuizzes" /><button>Assign Quiz</button><br/><br/>
              <label htmlFor="assignedGroups">Assigned groups:</label>
              <input type="text" id="assignedGroups" name="assignedGroups" /><button>Assign group</button><br /><br />
              <label htmlFor="notes">Notes:</label><br/>
              <textarea id="notes" name="notes"></textarea><br /><br />
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
          <button className='s'>Assign Users</button>
          <button className='s'>Create New Group</button>
          <button className='s'>Assign Groups</button>
        </div>
      )}
    </div> 
        </div>
      </div>
    </div>
  );
};

export default Publish;