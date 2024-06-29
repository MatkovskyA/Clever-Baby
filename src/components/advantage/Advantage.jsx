import "./_advantage.scss"

const Advantage = ({ title, text }) => {
  return (
    <div className="advantage">
      <h3 className="advantage-title">
        {title}
      </h3>
      <p className="advantage-text">{text}</p>
    </div>
  )
}

export default Advantage;