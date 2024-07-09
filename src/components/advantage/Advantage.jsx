import "./_advantage.scss"

const Advantage = ({ decor="", title, text }) => {
  return (
    <div className={`advantage ${decor}`}>
      <h3 className="advantage-title">
        {title}
      </h3>
      <p className="advantage-text">{text}</p>
    </div>
  )
}

export default Advantage;