import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';
import data from '../../../storage/data';
import background from "./../../../assets/bg-building-cards.jpg";
import './styleCarousel.css';

export default function CarouselContainer() 
{
  return (
    <div className='py-2' style={{ backgroundImage: `url(${background})` }}>
        <Carousel itemsToShow={3} className="px-3 mt-4 mb-2">
            {data.map(item =>
            {
                return <CarouselItem key={item.id} building={item}></CarouselItem>
            } 
            )}
        </Carousel>
    </div>
  )
}


