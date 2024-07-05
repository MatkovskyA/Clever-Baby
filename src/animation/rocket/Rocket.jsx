import "./_rocket.scss";
import rocket from "../../assets/icons/rocket.svg"

const Rocket = ({direction}) => {
  return (
    <div className='rocket'>
      <img src={rocket} className='rocket-img' alt="Icon"></img>
    </div>
  );
};

export default Rocket;