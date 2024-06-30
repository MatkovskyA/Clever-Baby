import Button from "../button/Button"

const Group = ({title, count, time, price}) => {

  return (
    <div className="group">
      <div className="group-title">{title}</div>
      <span className="group-count">{count} в неделю</span>
      <span className="group-time">{time} занятие</span>
      <span className="group-price">{price} в месяц</span>
    </div>
  )
}

export default Group