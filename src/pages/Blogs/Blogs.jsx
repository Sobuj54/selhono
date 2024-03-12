import { useQuery } from "@tanstack/react-query";
import MiniHero from "../../components/MiniHero/MiniHero";
import LatestPost from "./LatestPost/LatestPost";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import News from "./Articles&News/News";

const Blogs = () => {
  const url =
    "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const {
    data: allBlogs = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Articles"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/v1/blogs/all");
      return res.data.data;
    },
  });

  return (
    <>
      <MiniHero text="Articles & News" img={url} />
      <LatestPost />

      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <p className="text-center my-5">Something went wrong</p>
      ) : (
        <News allBlogs={allBlogs} />
      )}
    </>
  );
};

export default Blogs;
