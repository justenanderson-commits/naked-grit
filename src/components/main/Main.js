import './Main.css'
import Slider from '../slider/Slider'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/prints'
import Modal from 'react-modal'
import { useState } from 'react'



const Main = () => {
  const displayPrints = prints.map((print) => {
    return (
      <ImageCard
        image={print.image}
        title={print.title}
        description={print.description}
        price={print.price}
        key={print.id}
      />
    )
  })

  return (
    <div className="main">
      <div className='sliderContainer'>
      <Slider />
      </div>
      <h2>Prints</h2>
      <div className="image-cards-container">{displayPrints}</div>
    </div>
  )
}

export default Main
