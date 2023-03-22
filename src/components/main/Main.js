import './Main.css'
import Slider from '../slider/Slider'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/prints'
import Modal from 'react-modal'
import { useState } from 'react'

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     backgroundColor: "white",
//     width: 400,
//   },
// };


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
        className='custom-styles'
      >
        <button onClick={() => setModalOpen(false)}>x</button>
      </Modal>

    </div>
  )
}

export default Main
