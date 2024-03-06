import Articles from "./Articles&News/Articles";
import Banner from "./Banner/Banner";
import BottomHero from "./BottomHero/BottomHero";
import CallUs from "./CallUs/CallUs";
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
      <Follow />
      <Experience />
      <Articles />
      <BottomHero />
    </div>
  );
};

export default Home;
