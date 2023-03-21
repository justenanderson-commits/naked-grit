import './Main.css'
import Slider from '../slider/Slider'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/prints'
import Modal from 'react-modal'
import { useState } from 'react'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

// On Main component
// Add state to Main to track modal open/close state.
// Add an event listener to each ImageCard.
// When the image card is clicked, the state will toggle:  const [modalOpen, setModalOpen] = useState(false);



const Main = () => {
  const [ modalOpen, setModalOpen ] = useState(false)

  console.log('Modal is open: ', modalOpen)
  const displayPrints = prints.map((print) => {
    return (
      <ImageCard
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
        style={customStyles}
      >
        <div>Login/Signup</div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>

    </div>
  )
}

export default Main
