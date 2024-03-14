import { useParams } from "react-router-dom";
import MiniHero from "../../components/MiniHero/MiniHero";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const ProjectDetails = () => {
  const { id } = useParams();
  const url =
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const { data: project, isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await axios.get(
        `https://selhono-server.onrender.com/api/v1/projects/id/${id}`
      );
      return res.data.data;
    },
  });

  return (
    <>
      <MiniHero text="Project Details" img={url} />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-16 md:my-24 md:px-10">
          {/* text part */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center">
            <div className="grid grid-cols-2 md:px-10 lg:px-16">
              <div className="space-y-3 font-dm-serif text-xl">
                <p>Client</p>
                <p>Category</p>
                <p>Tags</p>
                <p>Date</p>
                <p>Link</p>
              </div>
              <div className="space-y-3 font-jost text-xl">
                <p>{project?.client}</p>
                <p>{project?.category}</p>
                <p>VIP, Home</p>
                <p>20,6,2024</p>
                <p>
                  <a href={project?.image} target="_blank">
                    Image
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl md:text-5xl font-dm-serif mb-4">
                {project?.title}
              </h3>
              <p className="font-jost md:text-lg">
                {project?.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Numquam, aspernatur fugit tempore natus
                dolorem laboriosam eaque, aut nam voluptas minus nulla
                consequatur voluptates soluta et voluptatum neque sit culpa
                ullam necessitatibus animi vero. Eligendi laudantium voluptas
                vitae aspernatur cumque tempora sapiente adipisci, minima quia
                molestiae sed natus et ullam repellendus.
              </p>
            </div>
          </div>

          {/* image part */}
          <div className="flex justify-center h-[400px] md:h-[541px] mt-10 md:mt-20">
            <img
              src={project?.image}
              alt="img"
              className="rounded-[100px] w-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
