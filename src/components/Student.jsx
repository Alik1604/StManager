import React from 'react';
import AddButton from './UI/Button/AddButton';

const Student = (props) => {
    return (
        <div className="studentContainer">
            <div className="studentInfo">
                <strong>{props.number}. {props.stInfo.name}</strong>
                <div className="student_info">{props.stInfo.results}</div>
            </div>
            <div className="opButtons">
                <AddButton onClick={()=> props.remove(props.stInfo)} className="kill_student">KILL</AddButton>
            </div>
        </div>
    );
};

export default Student;