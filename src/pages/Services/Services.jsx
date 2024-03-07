import BottomHero from "../../components/BottomHero/BottomHero";
import MiniHero from "../../components/MiniHero/MiniHero";
import ProjectPlan from "../../components/ProjectPlan/ProjectPlan";
import HowWeWork from "./HowWeWork/HowWeWork";

const Services = () => {
  const imgUrl =
    "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const titles = [
    "Project Plan",
    "Interior Work",
    "Retail Design",
    "2d/3d Art work",
    "Design",
    "Decoration Work",
  ];
  return (
    <>
      <MiniHero text="Services" img={imgUrl} />
      <ProjectPlan titles={titles} />
      <HowWeWork />
      <BottomHero />
    </>
  );
};

export default Services;
