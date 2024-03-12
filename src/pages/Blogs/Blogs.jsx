import { useQuery } from "@tanstack/react-query";
import MiniHero from "../../components/MiniHero/MiniHero";
import LatestPost from "./LatestPost/LatestPost";
import axios from "axios";

const Blogs = () => {
  const url =
    "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const { data: allBlogs = [] } = useQuery({
    queryKey: ["Articles"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/v1/blogs");
      return res.data.data;
    },
  });
  console.log("data:", allBlogs);
  return (
    <>
      <MiniHero text="Articles & News" img={url} />
      <LatestPost />
    </>
  );
};

export default Blogs;
