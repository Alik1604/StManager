import React from 'react';
import MyInput from './UI/Input/MyInput';
import AddButton from './UI/Button/AddButton';
import { useState } from 'react';


const StudentForm = (props) => {
  
      const [student, setStudent] = useState({name:'', results:''});
    
      function addStudent(e) {
        e.preventDefault();
        if(student.name ==='' || student.results === ''){
            alert('Enter all information please')
            setStudent({name:'', results:''});
            return
        }
        const regex = new RegExp('BP-[1-5] EN-[1-5] CDM-[1-5] NM-[1-5] MA-[1-5]');
        if(!regex.test(student.results)){
          alert('Enter correct information please \n Example: BP-1 EN-1 CDM-1 NM-1 MA-1')
          setStudent({name:'', results:''});
          return
        }

        const newStudent = {...student,id:Date.now()}
        props.create(newStudent);
        setStudent({name:'', results:''});
      }
    

    return (
        <form>
          <MyInput value = {student.name}  onChange={e => setStudent({...student,name:e.target.value})} type="text" placeholder="Name of Student"/>
          <MyInput value = {student.results}  onChange={e => setStudent({...student,results:e.target.value})} type="text" placeholder="Results"/>
          <AddButton  onClick={addStudent}>Add</AddButton>
      </form>
    );
};

export default StudentForm;