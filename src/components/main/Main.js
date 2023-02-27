import './Main.css'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/products'

const Main = () => {
  console.log('Prints: ', prints)
  return (
    <div className='main'>
      <h2>Prints</h2>
      <div className='image-cards-container'>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </div>
  )
}

export default Main
