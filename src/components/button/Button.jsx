const Button = ({text, btnStyle}) => {
  return (
    <button className={`${btnStyle} btn`}>
      {text}
    </button>
  )
}

export default Button;