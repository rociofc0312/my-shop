import React, { useEffect, useState } from 'react'
import './Slider.css'
import SliderContent from './SliderContent/SliderContent'
import SliderDots from './SliderDots/SliderDots'

const Slider = () => {
    const sliderImages = [
        require('../../assets/slider.png'),
        require('../../assets/slider2.png')
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderlength = sliderImages.length - 1

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex === sliderlength ? 0 : currentIndex + 1)
        }, 4000);
        return () => clearInterval(interval)
    }, [currentIndex, sliderlength])

    const nextSlide = (currentValue) => {
        setCurrentIndex(currentValue)
    }

    return (
        <div className="slider-container">
            <SliderContent slides={sliderImages} currentIndex={currentIndex}/>
            <SliderDots currentIndex={currentIndex} slides={sliderImages} onNext={nextSlide}/>
        </div>
    )
}

export default Slider
