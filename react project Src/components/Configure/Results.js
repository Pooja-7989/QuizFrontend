import React from 'react';
import "./Results.css";
import { BsFillInfoCircleFill } from "react-icons/bs";

function Results() {
  return (
    <div className='bg_1'>
      <div className='bg'>
      <form>
        <table>
          <tr>
            <td>
              <b><p>Show answers <br/> during quiz</p></b>
            </td>
            <td>
              <input type='checkbox'/><br/>
              <p>As each page is completed the answers and any feedback will be displayed to the respondent</p>
            </td>
          </tr>
          <tr>
            <td>
              <b><p>Show results <br/>page</p></b>
            </td>
            <td>
              <input type='checkbox'/><br/>
              <p>
                The results page will be displayed to the respondent when they submit the quiz. Configure the results page below.
              </p>
            </td>
          </tr>
          <tr>
            <td className='bg_3'>
              <b><p>Results page <br/>options</p></b>
            </td>
            <td>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Name</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Email</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Result</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Grade</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Points score</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Percentage score</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Category scores</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Duration</p>
              </span><br/>
              <span className="side-by-side">
                <input type='checkbox' />
                <p>Review answers report <BsFillInfoCircleFill /></p>
              </span><br/>
              <div className="sub-content">
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Show question marking <BsFillInfoCircleFill /></p>
                </span><br/>
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Show question points  <BsFillInfoCircleFill /></p>
                </span><br/>
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Show page times  <BsFillInfoCircleFill /></p>
                </span><br/>
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Show category scores  <BsFillInfoCircleFill /></p>
                </span><br/>
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Show question feedback  <BsFillInfoCircleFill /></p>
                </span><br/>
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Highlight correct answers  <BsFillInfoCircleFill /></p>
                </span><br/>
                <span className="side-by-side">
                  <input type='checkbox' />
                  <p>Can download PDF  <BsFillInfoCircleFill /></p>
                </span><br/>
              </div>
              <p>The answer report shown to administrators can be configured in the General section of the Setting screen </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Pass/Fail<br/>message</p>
            </td>
            <td>
              <input type='checkbox'/>
            </td>
          </tr>
          <tr>
            <td>
              <p>Show redirected<br/>quiz results</p>
            </td>
            <td>
              <input type='checkbox'/>
              <p>Results from any quizzes that have redirected to this quiz will be included.</p>
            </td>
          </tr>
        </table>
      </form>
      </div>
    </div>
  );
}

export default Results;