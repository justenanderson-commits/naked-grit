import slides from '../../assets/slides'
import { useState } from 'react'
import './Slider.css'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(5)

  const slideStyles = {
    width: '200%',
    height: '150%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].img})`,
    margin: '0% 0% 1% -50%',
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const showDots = slides.map((slide, slideIndex) => (
    <div
      className="dotStyles"
      key={slideIndex}
      onClick={() => goToSlide(slideIndex)}
    >
        ⏺
    </div>
  ))

  return (
    <div className="sliderStyles">
      <div className="arrowStyles leftArrow" onClick={goToPrevious}>
        &#9664;
      </div>
      <div className="arrowStyles rightArrow" onClick={goToNext}>
        ▶
      </div>
      <div style={slideStyles}></div>

      <div className="dotsContainerStyles">{showDots}</div>
    </div>
  )
}

export default Slider
