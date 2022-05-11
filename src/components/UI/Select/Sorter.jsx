import React from 'react';

const Sorter = (props) => {
  //
    return (
        <div>
        <select value={props.value} onChange={e => props.onChange(e.target.value)}>
          <option value={"name"}>Sort by name</option>
          <option value={"results"}>Sort by results</option>
        </select>
      </div>
    );
};

export default Sorter;