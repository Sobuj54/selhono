import PropTypes from "prop-types";

const Pagination = ({ projects, setPageNo }) => {
  return (
    <div className="mb-16 flex gap-5 items-center justify-center">
      {projects?.hasPrevPage && (
        <button
          className="bg-amber-200/50 text-lg font-jost px-4 py-2 rounded-lg"
          onClick={() => setPageNo(projects.prevPage)}>
          Prev
        </button>
      )}
      <button className="h-9 w-9 bg-slate-200 rounded-full text-lg">
        {projects?.page}
      </button>
      {projects?.hasNextPage && (
        <button
          className="bg-amber-200/50 font-jost px-4 py-2 rounded-lg text-lg"
          onClick={() => setPageNo(projects.nextPage)}>
          Next
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  projects: PropTypes.object,
  setPageNo: PropTypes.func,
};

export default Pagination;
