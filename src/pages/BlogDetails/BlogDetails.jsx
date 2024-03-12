import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/blogs/blog/${id}`
      );
      console.log(res.data);
      return res.data.data;
    },
  });
  return <div>{data?.title}</div>;
};

export default BlogDetails;
