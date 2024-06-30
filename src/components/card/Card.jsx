import "./_card.scss"

const Card = ({ image, name, text }) => {
  return (
    <div className="card">
      <div className="card-foto">
        <img src={image} alt="Foto" />
      </div>
      <div className="card-name">
        <span>{name}</span>
      </div>
      <div className="card-country">
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Card;