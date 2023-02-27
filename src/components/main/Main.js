import './Main.css'
import Slider from '../slider/Slider'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/prints'

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

  const containerStyles = {
    width: "400px",
    height: "200px",
    margin: "0 auto"
  }

  return (
    <div className="main">
      <div style={ containerStyles }>
      <Slider />
      </div>
      <h2>Prints</h2>
      <div className="image-cards-container">{displayPrints}</div>
    </div>
  )
}

export default Main
