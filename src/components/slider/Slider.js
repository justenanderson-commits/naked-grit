import slides from '../../assets/slides'
import { useState } from 'react'
// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'


// Left off from this video: https://www.youtube.com/watch?v=SK9AlIbexOE&t=334s at 5:56 //





const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(5)
  console.log('Current slide image: ', slides[currentIndex].img)

  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].img})`,
    marginBottom: '10%'
  }

  

  return (
    <div style={ sliderStyles }>
      Image Carousel
      <div style={ slideStyles }></div>
    </div>
  )
}

export default Slider
