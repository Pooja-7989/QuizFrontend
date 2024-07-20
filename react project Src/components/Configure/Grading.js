
import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import "./Grading.css";

function Grading() {
    const [grades, setGrades] = useState([
        { grade: '', minimum: '', pass: false },
        { grade: '', minimum: '', pass: false }
    ]);

    const handleDelete = (index) => {
        setGrades(grades.filter((_, i) => i !== index));
    };

    const handleAdd = () => {
        setGrades([...grades, { grade: '', minimum: '', pass: false }]);
    };

    const handleChange = (index, field, value) => {
        const newGrades = [...grades];
        newGrades[index][field] = value;
        setGrades(newGrades);
    };

    return (
        <div className='bg_1'>
            <div className='bg'>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>Grade</th>
                                <th>Minimum %</th>
                                <th>Pass</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {grades.map((grade, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type='text'
                                            value={grade.grade}
                                            onChange={(e) => handleChange(index, 'grade', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type='number'
                                            value={grade.minimum}
                                            onChange={(e) => handleChange(index, 'minimum', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type='checkbox'
                                            checked={grade.pass}
                                            onChange={(e) => handleChange(index, 'pass', e.target.checked)}
                                        />
                                    </td>
                                    <td>
                                        <MdOutlineCancel onClick={() => handleDelete(index)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </form>
                <button className='gradebtn' onClick={handleAdd}>Add grade</button>
                <p>
                    The result and grade can be shown to the respondent by setting the Display Options within the{' '}
                    <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>Results</span> tab
                </p>
            </div>
        </div>
    );
}

export default Grading;
