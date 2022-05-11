import React from 'react';
import MyInput from './UI/Input/MyInput';
import Sorter from './UI/Select/Sorter';

const StudentFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput value={filter.search} onChange={e => setFilter({...filter,search: e.target.value})} placeholder="Search" />
            <Sorter value={filter.sort} onChange={op =>  setFilter({...filter,sort : op})}/>
        </div>
    );
};

export default StudentFilter;