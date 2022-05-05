import React from 'react'
import data from '../../../storage/data';
import ExpandableBuilding from './ExpandableBuilding';

export default function ExpandableListContainer() {
  return (
    <div className='d-flex'>
        
        { data.map(e =>
            {
                return <ExpandableBuilding building={e}></ExpandableBuilding>
            }) }


    </div>
  )
}
