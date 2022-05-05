import React from 'react'
import ExpandableFloor from './ExpandableFloor'

export default function ExpandableBuilding({ building }) {
  return (
    <div className='w-100 mx-3 '>
      
      <img className='my-4' src={building.floorIcon} alt="No se puede mostrar :c" style={{ width: '60px' }} />

      <p style={{ fontWeight: '700', fontSize: '20px' }}>Edificio { building.name }</p>

      { building.floors.map(e =>
        {
            return <ExpandableFloor floor={e}></ExpandableFloor>
        }) }

    </div>
  )
}
