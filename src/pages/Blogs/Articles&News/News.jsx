import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const News = ({ allBlogs }) => {
  return (
    <div className="my-24">
      <h2 className="font-dm-serif text-4xl md:text-5xl mb-10">
        Articles & News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allBlogs.map((blog) => (
          <div key={blog._id}>
            <img
              src={blog.image}
              alt="img"
              className="h-[400px] rounded-t-3xl object-cover w-full"
            />
            <h2 className="font-dm-serif text-2xl mt-2">{blog.title}</h2>
            <div className="flex items-center justify-between mt-5">
              <p>{new Date(blog?.createdAt).toLocaleDateString()}</p>
              <Link
                to={`/blog-details/${blog._id}`}
                className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-semibold">
                &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

News.propTypes = {
  allBlogs: PropTypes.array,
};

export default News;
