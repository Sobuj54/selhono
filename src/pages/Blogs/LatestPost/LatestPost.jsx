import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../../components/Spinner/Spinner";

const LatestPost = () => {
  const {
    data: latestBlog,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/v1/blogs/latest");
      return res.data.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <p className="text-center my-4">Something went wrong</p>;
  }

  return (
    <div className="my-16">
      <h2 className="text-4xl md:text-5xl font-dm-serif mb-10">Latest Post</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <img
          src={latestBlog.image}
          alt="img"
          className="h-400px object-cover rounded-3xl w-full"
        />

        <div className="flex flex-col gap-7 lg:justify-between">
          <h4 className="font-dm-serif text-2xl">{latestBlog?.title}</h4>
          <p className="font-jost">{latestBlog?.description}</p>
          <div className="flex items-center justify-between">
            <p>{new Date(latestBlog?.createdAt).toLocaleDateString()}</p>
            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-semibold">
              &gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
