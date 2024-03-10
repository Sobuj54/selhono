import { useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import IndividualProject from "./IndividualProject/IndividualProject";
import Category from "./IndividualProject/Category/Category";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const Project = () => {
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState("Bath Room");
  const url =
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects", category, pageNo],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/projects/${category}?page=${pageNo}&limit=6`
      );
      return res.data.data;
    },
  });

  return (
    <>
      <MiniHero text="Our Project" img={url} />

      <Category
        category={category}
        setCategory={setCategory}
        setPageNo={setPageNo}
      />

      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 w-11/12 mx-auto">
            {projects.docs.map((project) => (
              <IndividualProject key={project._id} project={project} />
            ))}
          </div>

          <div className="mb-16 flex gap-5 items-center justify-center">
            {projects.hasPrevPage && (
              <button
                className="bg-amber-200/50 text-lg font-jost px-4 py-2 rounded-lg"
                onClick={() => setPageNo(projects.prevPage)}>
                Prev
              </button>
            )}
            <button className="h-9 w-9 bg-slate-200 rounded-full text-lg">
              {projects.page}
            </button>
            {projects.hasNextPage && (
              <button
                className="bg-amber-200/50 font-jost px-4 py-2 rounded-lg text-lg"
                onClick={() => setPageNo(projects.nextPage)}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
