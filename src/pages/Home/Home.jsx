import BottomHero from "../../components/BottomHero/BottomHero";
import ProjectPlan from "../../components/ProjectPlan/ProjectPlan";
import Articles from "./Articles&News/Articles";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Companies from "./Companies/Companies";
import Experience from "./Experience/Experience";
import Follow from "./Follow/Follow";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  const titles = ["Project Plan", "Interior Work", "Realization"];
  return (
    <div>
      <Banner />
      <ProjectPlan titles={titles} />
      <CallUs />
      <Testimonial />
      <Companies />
      <Follow />
      <Experience />
      <Articles />
      <BottomHero />
    </div>
  );
};

export default Home;
