import React from 'react';
import Student from "./Student";

const StudenList = ({students,groupName,remove}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{groupName}</h1>
                {students.map((student,index) => 
                    <Student remove={remove} number={index+1} key={student.id} stInfo={student}/>
                )}
        </div>
    );
};

export default StudenList;