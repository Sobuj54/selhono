import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import MiniHero from "../../components/MiniHero/MiniHero";
import Spinner from "../../components/Spinner/Spinner";
import Details from "./Details/Details";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/blogs/blog/${id}`
      );
      console.log(res.data);
      return res.data.data;
    },
  });
  const url =
    "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div>
      <MiniHero text="Blog Details" img={url} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <p className="text-center my-5">Something went wrong.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-5 my-20">
          <div className="col-span-2"></div>
          <div className="col-span-3">
            <Details blog={blog} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;