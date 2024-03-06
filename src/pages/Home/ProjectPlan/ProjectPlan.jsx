import Button from "../../../components/Button/Button";

const ProjectPlan = () => {
  const titles = ["Project Plan", "Interior Work", "Realization"];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-28">
      {titles.map((title, index) => (
        <div key={index} className="sm:p-4 text-center">
          <h4 className="font-dm-serif text-2xl">{title}</h4>
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

export default ProjectPlan;
