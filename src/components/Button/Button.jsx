import PropTypes from "prop-types";

const Button = ({ text, bgColor }) => {
  return (
    <button
      className={`bg-[${bgColor}] text-white w-52 rounded-md py-4 font-sans text-lg font-semibold`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
