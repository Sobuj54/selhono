import { useState } from "react";
import MiniHero from "../../components/MiniHero/MiniHero";
import IndividualProject from "./IndividualProject/IndividualProject";
import Category from "./IndividualProject/Category/Category";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";
import Pagination from "../../components/pagination/Pagination";

const Project = () => {
  const [pageNo, setPageNo] = useState(1);
  const [category, setCategory] = useState("Bath Room");
  const url =
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
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
      ) : error ? (
        "Something went wrong"
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 mb-16 w-11/12 mx-auto">
            {projects?.docs.map((project) => (
              <IndividualProject key={project._id} project={project} />
            ))}
          </div>

          {/* pagination */}
          <Pagination projects={projects} setPageNo={setPageNo} />
        </div>
      )}
    </>
  );
};

export default Project;
