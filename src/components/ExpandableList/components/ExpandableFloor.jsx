import React from 'react'
/* import ClassromView from './ClassromView' */

export default function ExpandableFloor({ floor }) {
  return (
    <div className='my-2'> 
        <a href="" >{floor.title}</a>
        {/* {classrooms.map(obj => <ClassromView title={obj.title}  data={obj.data} />)} */}
    </div>
    
  )
}
