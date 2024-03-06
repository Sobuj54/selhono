import buffer from "../../../assets/images/buffer.svg";
import bigCommerce from "../../../assets/images/bigCommerce.svg";
import won from "../../../assets/images/won.svg";

const Companies = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-28 gap-5 md:gap-0 md:my-36 items-center">
      <div className="flex justify-center">
        <img src={buffer} alt="img" />
      </div>
      <div className="flex justify-center">
        <img src={bigCommerce} alt="img" />
      </div>
      <div className="flex justify-center">
        <img src={won} alt="img" />
      </div>
    </section>
  );
};

export default Companies;
