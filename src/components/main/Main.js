import './Main.css'
import ImageCard from '../imageCard/ImageCard'
import prints from '../../assets/products'

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
      <h2>Prints</h2>
      <div className="image-cards-container">{displayPrints}</div>
    </div>
  )
}

export default Main
