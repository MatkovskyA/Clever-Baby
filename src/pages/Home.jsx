import Advantages from "../components/advantages/Advantages";
import Hero from "../components/hero/Hero"
import Metodology from "../components/metodology/Metodology";
import Modal from "../components/modal/Modal";
import TrialLesson from "../components/trial-lesson/TrialLesson";

const Home = () => {
  return (
    <>
      <Hero />
      <Metodology />
      <Advantages />
      <TrialLesson />
    </>
  )
}

export default Home;