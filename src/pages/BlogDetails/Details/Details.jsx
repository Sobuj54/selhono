import PropTypes from "prop-types";

const Details = ({ blog }) => {
  const { title, image, description } = blog;
  return (
    <div>
      <h3 className="font-dm-serif text-4xl">{title}</h3>
      <img
        src={image}
        alt="img"
        className="h-[520px] w-full object-cover my-5"
      />
      <p className="font-jost">{description}</p>
    </div>
  );
};

Details.propTypes = {
  blog: PropTypes.object,
};

export default Details;
