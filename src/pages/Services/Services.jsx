import BottomHero from "../../components/BottomHero/BottomHero";
import MiniHero from "../../components/MiniHero/MiniHero";

const Services = () => {
  const imgUrl =
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <MiniHero text="Services" img={imgUrl} />
      <BottomHero />
    </>
  );
};

export default Services;
