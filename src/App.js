import React, { useMemo, useState } from "react";
import StudenList from "./components/StudenList";
import StudentFilter from "./components/StudentFilter";
import StudentForm from "./components/StudentForm";
import AddButton from "./components/UI/Button/AddButton";
import ModalWindow from "./components/UI/ModalWindow/ModalWindow";


import "./styles/App.css";

function App() {
  const [students, setStudents] = useState([
    {id: 1,name:"Albert Rudenko", results:"BP-1 EN-1 CDM-1 NM-1 MA-1"},
    {id: 2,name:"Nazariy Klymok", results:"BP-5 EN-5 CDM-5 NM-5 MA-5"},
    {id: 3,name:"Shevchuk Sergiy", results:"BP-4 EN-4 CDM-4 NM-4 MA-4"},
  ])

  const [filter,setFilter] = useState({sort:'',search:''});
  const [visible,setVisible] = useState(false);

  const sortedStudents = useMemo(()=> {
    if(filter.sort){
      return [...students].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return students;
  }, [filter.sort,students]);

  const sortedAndSearchStudents = useMemo(() => {
    return sortedStudents.filter(s => s.name.toLowerCase().includes(filter.search))
  },[filter.search,sortedStudents])

  function createStudent(student){
    setStudents([...students,student])
    setVisible(false)
  }

  function killStudent(student) {
    const a = window.confirm("Are you shure?")
    a ? setStudents(students.filter(s => s.id !== student.id)) : setStudents(students)
  }

  return (
    <div className="App">
      <AddButton style={{marginTop:'10px'}} onClick={() => setVisible(true)}>
        Add Student
      </AddButton>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <StudentForm create={createStudent}/>
      </ModalWindow>
      <hr style={{margin:"15px 0"}}></hr>
      <StudentFilter filter={filter} setFilter={setFilter}/>
      {sortedAndSearchStudents.length !== 0 ? <StudenList remove={killStudent} students={sortedAndSearchStudents} groupName="PS-16"/> : <h1 style={{textAlign:"center",marginTop:"150px"}}>Students not found</h1> }
    </div>
  );
}

export default App;
