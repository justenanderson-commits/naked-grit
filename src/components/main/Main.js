import './Main.css'
import Slider from '../slider/Slider'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/prints'
import Modal from 'react-modal'
import { useState } from 'react'

const Main = () => {
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ modalImage, setModalImage ] = useState(0)

  const displayPrints = prints.map((print) => {
    return (
      <ImageCard
        setModalImage={ setModalImage }

        setModalOpen={ setModalOpen }
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

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        className='custom-styles' >
        {/* Need to add alt text attribute here */}
        // <img src={ modalImage } />

        <button onClick={() => setModalOpen(false)}>x</button>
      </Modal>

    </div>
  )
}

export default Main


