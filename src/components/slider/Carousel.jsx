import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import "./_carousel.scss";

import Card from '../card/Card';
import foto1 from "../../assets/images/teacher.png"
import foto2 from "../../assets/images/teacher2.png"
import foto3 from "../../assets/images/teacher3.png"
import foto4 from "../../assets/images/teacher4.png"
import foto5 from "../../assets/images/teacher5.jpeg"
import foto6 from "../../assets/images/teacher6.avif"
import foto7 from "../../assets/images/teacher7.avif"
const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <Card
        image={foto1}
        name={"Kate Smith"}
        text={"США"}
      />
      <Card
        image={foto2}
        name={"Samuel King"}
        text={"США"}
      />
      <Card
        image={foto3}
        name={"Nikole Young"}
        text={"Канада"}
      />
      <Card
        image={foto4}
        name={"Karoline Bush"}
        text={"Канада"}
      />
      <Card
        image={foto5}
        name={"Olivia Stoun"}
        text={"Англия"}
      />
      <Card
        image={foto6}
        name={"Nataly Keidge"}
        text={"США"}
      />
      <Card
        image={foto7}
        name={"Vladilena Koin"}
        text={"Англия"}
      />
    </Slider>
  );
}

export default Carousel;