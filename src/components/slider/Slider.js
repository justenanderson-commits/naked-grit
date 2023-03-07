import slides from '../../assets/slides'
import { useState } from 'react'
import './Slider.css'
// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

// Left off from this video: https://www.youtube.com/watch?v=SK9AlIbexOE&t=334s at 5:56 //

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(5)
  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].img})`,
    marginBottom: '10%',
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '3%',
    fontSize: '45px',
    color: 'fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '3%',
    fontSize: '45px',
    color: 'fff',
    zIndex: 1,
    cursor: 'pointer',
  }

  const goToPrevious = () => {
    let newIndex
    currentIndex > 0
      ? (newIndex = currentIndex - 1)
      : (newIndex = slides.length - 1)
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    let newIndex
    currentIndex < slides.length - 1
      ? (newIndex = currentIndex + 1)
      : (newIndex = 0)
    setCurrentIndex(newIndex)
  }

  const showDots = slides.map((slide, slideIndex) => (
    <div className="dotStyles" key={slide.Index}>
      ⚪️
    </div>
  ))

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ◀
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ▶
      </div>
      <div style={slideStyles}></div>

      <div className="dotsContainerStyles">{showDots}</div>
    </div>
  )
}

export default Slider
