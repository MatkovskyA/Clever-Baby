const Button = ({text, btnStyle}) => {
  return (
    <button className={`btn ${btnStyle}`}>
      {text}
    </button>
  )
}

export default Button;