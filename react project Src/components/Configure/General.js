
import React from 'react'
import "./General.css"
function General() {
  return (
    <>
    <div className='bg_1'>
    <div className='bg'>
      <table>
        <tr>
          <td>Quiz name</td>
          <td><input type='text' /></td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            Display
          </td>
          <td >
            <span className='space'>
              <input type='checkbox' /> Quiz name
            </span>

            <span className='space'>
              <input type='checkbox' /> page titles
            </span>

            <span className='space'>
              <input type='checkbox' /> FlexQuiz link
            </span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <span className='space'>
              <input type='checkbox' /> Progress bar
            </span>

            <span className='space'>
              <input type='checkbox' /> Page number bar
            </span>

            <span className='space'>
              <input type='checkbox' /> Logo
            </span>
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            Save and Continue
          </td>
          <td>
            <span className='space'>
              <input type='checkbox' />Allow save and contiune
            </span>
            <span>
              <input type='checkbox' />Email quix link
            </span>
          </td>
        </tr>

        <tr></tr>
        <tr>
          <td></td>
          <td>
            Respondents will have the option to return and complete the quiz at a later time.
            After clicking save and continue the quiz taker will be allowed to request an email containing the quiz link
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            Time limit
          </td>
          <td>
            <span>
              <input type='checkbox' />
            </span>
            <span>
              <input type='time' />
            </span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
          Respondents will only have the set time to complete the whole quiz. The time limit is entered in the format hours:minutes (hh:mm)
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            Page time limits
          </td>
          <td>
            <input type='checkbox'/> <button>Set time limit</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Set individual time limits for each page within your quiz</td>
        </tr>
        <tr></tr>
        <tr>
         <td>
          Randomize question
          </td> 
          <td>
            <span>
           <input type='checkbox'/> 
           <select name="cars">
           <option value="Whole Quiz">Whole Quiz</option>
           <option value="From Page">From Page</option>
           <option value="set page">Set page</option>
          </select>
          </span>
          <span>
            include <input />question
          </span>
          </td>
        </tr>
        <tr>
            <td></td>
            <td>
            Questions will be displayed in a random order to each respondent. You can also set the total number of questions to be asked or leave blank to show all questions.
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Auto number question
            </td>
            <td>
              <input type='checkbox'/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            A sequential number will be automatically added to the start of each questio
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
            Question bookmarks
            </td>
            <td>
              <input type='checkbox'/>
            </td> 
            </tr>
            <tr>
              <td></td>
              <td>
              Respondents can bookmark questions during the test
              </td>
            </tr>
          <tr></tr>
          <tr>
            <td>
              Question per page
            </td>
             <td>
              <input type='checkbox'/> question
            </td>
          </tr>
          <tr>
            <td></td>
            <td>   
            If selected this will override the page setup on the Create screen so that when the quiz is taken each page will contain the set number of questions.
            </td>
          </tr>
          <tr>
            <td>
              Maximum quiz attempts
            </td>
            <td>
              <input type=''/> <input type='checkbox'/> can only reatke if fail quiz
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            If set to greater than 1 then respondents will be able take the quiz up to the value set. Leave blank to allow respondents to take the quiz unlimited times.
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Use browser atempts tracker
            </td>
            <td>
              <input type='checkbox'/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            A respondent will only be able to complete your quiz the specified number of times from the same devices browser (such as PC, laptop, tablet, phone). This option only applies to quizzes published using the Quiz Link type.
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Redirect on quiz completion
            </td>
            <td>
              <input type='checkbox'/> 
              <select>
                <option>Quiz</option>
                <option>URL</option>
              </select>
              <select>
                <option><input type='text'/></option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            After completing the quiz respondents can be redirected to a specific URL or another quiz, any registration details will be automatically passed to the new quiz. You can also configure redirection based on the grade achieved within the Grading tab.
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Schedule
            </td>
            <td>
              <span>
              <input type='checkbox'/> From:<input type='date'/> <input type='time'/>
              </span>
              <br></br>
              <span>
                To: <input type='date'/> <input type='time'/>
              </span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            Set a schedule for when your quiz will automatically open and then close based on the timezone for your account. Your current time zone is (GMT-07:00) Mountain Time (US & Canada) - you can change this on the Settings Page
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Users Schedule
            </td>
            <td>
              <input type='checkbox'/> <input type='text'/> days
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            Set the number of days that each user can access the quiz. The users schedule starts from the time a quiz is assigned to the user.
             </td>
          </tr>
          <tr>
            <td>
              Question layout
            </td>
            <td>
              <select>
                <option>Vertical</option>
                <option>Horizontal</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            Options can be positioned under the question text (Vertical) or to the right of the question text (Horizontal). On devices with a smaller screen size, such as mobiles, the questions will always be shown with a Vertical layout.
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Navigation bar position
            </td>
            <td>
              <select>
                <option>Fixed</option>
                <option>inline</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            The navigation buttons can be positioned to display at the end of the page (Inline) or fixed to the bottom of the screen (Fixed).
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Allow edit commands
            </td>
            <td>
              <span className='space'>
                <input type='checkbox'/> cut
              </span>
              <span className='space'>
                <input type='checkbox'/> Copy
              </span>
              <span className='space'>
                <input type='checkbox'/> paste
              </span>
              <span className='space'>
                <input type='checkbox'/> print
              </span>
              <br></br>
              <span>
               <input type='checkbox'/> rightmouse click menu
              </span>
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Allow previous page navigation
            </td>
            <td>
              <input type='checkbox'/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
            If selected respondents can navigate backwards and forwards between the pages in your quiz.
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              Confirm before
            </td>
            <td>
            <span>
                <input type='checkbox'/>
                  Submit </span>
            <span>
            <input type='checkbox'/>
                Close browser tab</span>
            </td>
          </tr>
      </table>
      </div>
      </div>
    </>
  )
}
export default General