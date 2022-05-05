import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function CarouselItem({ building }) 
{
  return (
    <div>
        <Card style={{ width: '400px', height: '600px', borderRadius: '12px', border: '2px solid black'}}>
            <Card.Img src={building.floorImage} className="w-100 mt-3" style={{ borderRadius: '9px 9px 0px 0px',  width: '200px', height: '180px' }}/>
            <Card.Body className='p-0'>
                <Card.Title className="my-4" style={{ fontFamily: 'righteous', fontSize: '32px' }}>Edificio {building.name}</Card.Title>
                <Card.Text style={{ border: '1px solid black', borderRadius: '12px', fontFamily: 'jost' }}
                    className='mt-3 mb-4 mx-4 d-flex flex-column justify-content-center align-items-start px-4 py-4'>
                    <div>
                        <p>Pisos:</p>
                    </div>
                    <div>
                        <p>Aulas:</p>
                    </div>
                    <div>
                        <p>Niveles promedio:</p>
                    </div>
                    {/* <div>
                        <p>{building.details}</p>
                    </div> */}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='p-0'>
                <Button variant="secondary" className='w-100' style={{ borderRadius: '0px 0px 9px 9px', fontFamily: 'righteous' }}>VER MÁS</Button>
            </Card.Footer>
        </Card>
    </div>
  )
}
