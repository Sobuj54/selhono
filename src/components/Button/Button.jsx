import PropTypes from "prop-types";

const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`${bgColor} ${textColor} w-52 rounded-md py-4 font-sans text-lg font-semibold`}>
      {text} --&gt;
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
