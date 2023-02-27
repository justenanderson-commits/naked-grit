import slides from '../../assets/slides'
import { useState } from 'react'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log('Current slide image: ', slides[currentIndex].img)

  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }

  const slideStyles = {
    border: '2px solid black',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].img})`
  }

  return (
    <div style={ sliderStyles }>
      Image Carousel
      <div style={ slideStyles }></div>
    </div>
  )
}

export default Slider
