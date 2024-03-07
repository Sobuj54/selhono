import PropTypes from "prop-types";
import Button from "../Button/Button";

const ProjectPlan = ({ titles }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-28">
      {titles.map((title, index) => (
        <div
          key={index}
          className="text-center sm:p-4 hover:text-[#C76904] hover:bg-[#F9F9F9] hover:cursor-pointer md:mt-5">
          <h4 className="text-2xl font-dm-serif">{title}</h4>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            illo perspiciatis fugit corporis recusandae! Qui.
          </p>
          <Button text="Read More" bgColor="bg-white" textColor="text-black" />
        </div>
      ))}
    </div>
  );
};

ProjectPlan.propTypes = {
  titles: PropTypes.array,
};

export default ProjectPlan;
