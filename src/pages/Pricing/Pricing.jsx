import MiniHero from "../../components/MiniHero/MiniHero";
import PricingPlan from "./PricingPlan/PricingPlan";

const Pricing = () => {
  const url =
    "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <MiniHero text="Pricing & Plan" img={url} />
      <PricingPlan />
    </>
  );
};

export default Pricing;
