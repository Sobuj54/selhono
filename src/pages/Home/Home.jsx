import BottomHero from "../../components/BottomHero/BottomHero";
import Articles from "./Articles&News/Articles";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Companies from "./Companies/Companies";
import Experience from "./Experience/Experience";
import Follow from "./Follow/Follow";
import ProjectPlan from "./ProjectPlan/ProjectPlan";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProjectPlan />
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
