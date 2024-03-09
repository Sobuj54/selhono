import PropTypes from "prop-types";

const IndividualProject = ({ project }) => {
  const { image, title } = project;
  return (
    <div className="md:w-[580px]">
      <div>
        <img src={image} alt={title} className="h-[600px] object-cover" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="font-dm-serif text-2xl">{title}</h3>
          <p className="font-jost text-xl">Decor / Architecture</p>
        </div>
        <div className="rounded-full cursor-pointer hover:bg-slate-500 transition-all duration-200 ease-in-out hover:text-white w-12 h-12 flex items-center justify-center font-bold overflow-hidden bg-[#F4F0EC]">
          &gt;
        </div>
      </div>
    </div>
  );
};

IndividualProject.propTypes = {
  project: PropTypes.object,
};

export default IndividualProject;