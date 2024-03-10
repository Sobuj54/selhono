import PropTypes from "prop-types";

const Category = ({ category, setCategory, setPageNo }) => {
  return (
    <div className="w-full md:w-9/12 lg:w-1/2 mx-auto grid grid-cols-2 sm:grid-cols-4 border-[2px] border-[#CDA274] font-jost font-medium rounded-lg overflow-hidden mt-10">
      <button
        className={`${
          category == "Bath Room"
            ? "bg-[#CDA274] text-white"
            : "hover:bg-[#CDA274] hover:text-white "
        }p-6 rounded-md`}
        onClick={() => {
          setCategory("Bath Room");
          setPageNo(1);
        }}>
        Bath Room
      </button>
      <button
        className={`${
          category == "Bed Room"
            ? "bg-[#CDA274] text-white"
            : "hover:bg-[#CDA274] hover:text-white"
        } p-6 rounded-md`}
        onClick={() => {
          setCategory("Bed Room");
          setPageNo(1);
        }}>
        Bed Room
      </button>
      <button
        className={`${
          category == "Kitchen"
            ? "bg-[#CDA274] text-white"
            : "hover:bg-[#CDA274] hover:text-white"
        }p-6 rounded-md`}
        onClick={() => {
          setCategory("Kitchen");
          setPageNo(1);
        }}>
        Kitchen
      </button>
      <button
        className={`${
          category == "Living Area"
            ? "bg-[#CDA274] text-white"
            : "hover:bg-[#CDA274] hover:text-white"
        } p-6 rounded-md`}
        onClick={() => {
          setCategory("Living Area");
          setPageNo(1);
        }}>
        Living Area
      </button>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.string,
  setCategory: PropTypes.func,
  setPageNo: PropTypes.func,
};

export default Category;
