import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

const LatestNews = ({ id }) => {
  const {
    data: blogs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latest blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://selhono-server.onrender.com/api/v1/blogs/latest-blogs/${id}`
      );
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p className="text-center my-5">Something went wrong.</p>;
  }

  return (
    <div>
      <h3 className="font-dm-serif text-2xl mb-5">Latest News</h3>
      <div>
        {blogs.map((blog) => (
          <div key={blog._id} className="my-7">
            <Link
              to={`/blog-details/${blog._id}`}
              className="font-dm-serif text-lg cursor-pointer hover:underline">
              {blog.title}
            </Link>
            <p className="text-end mt-1">
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div className="w-full h-[1px] bg-[#CDA274]" />
          </div>
        ))}
      </div>
    </div>
  );
};

LatestNews.propTypes = {
  id: PropTypes.string,
};

export default LatestNews;
