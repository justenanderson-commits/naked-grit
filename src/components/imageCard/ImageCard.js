import './ImageCard.css'

const ImageCard = ({ image, title, description, price }) => {
  return (
    <div className="image-card">
      <img
        src={ image }
        className="print-image"
        alt={ description }
      />
      <h3> { title } </h3>
      <p> { description } </p>
      <h4> { price } </h4>
    </div>
  )
}

export default ImageCard
