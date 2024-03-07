import PropTypes from "prop-types";

const MiniHero = ({ text, img }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
        height: "356px",
      }}
      className="bg-cover ">
      <div className="flex items-center justify-center h-full">
        <h2 className="text-4xl text-white md:text-6xl font-dm-serif">
          {text}
        </h2>
      </div>
    </section>
  );
};

MiniHero.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
};

export default MiniHero;
