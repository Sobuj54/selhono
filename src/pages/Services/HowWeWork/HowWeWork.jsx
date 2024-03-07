const HowWeWork = () => {
  const works = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Concept & Details",
      description:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Concept & Details",
      description:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1181715/pexels-photo-1181715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Design",
      description:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Perfection",
      description:
        "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting indufstry. ",
    },
  ];
  return (
    <section className="my-32">
      <div className="mx-auto text-center w-9/10 md:w-7/12 lg:w-1/2">
        <h2 className="mb-5 text-4xl md:text-5xl font-dm-serif">How We Work</h2>
        <p className="font-jost">
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div>
        {works.map((work) =>
          work.id % 2 == 0 ? (
            <div
              key={work.id}
              className="h-[485px] overflow-hidden grid grid-cols-2 gap-5 mt-20 md:mt-28">
              <div className="flex flex-col justify-between md:px-12">
                <h3 className="text-5xl md:text-8xl text-[#C76904] text-start font-dm-serif">
                  0{work.id}
                </h3>
                <div>
                  <h5 className="mb-3 text-2xl md:text-4xl font-dm-serif">
                    {work.title}
                  </h5>
                  <p>
                    {work.description}Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Veritatis autem, amet quod corrupti neque
                    cupiditate exercitationem labore cum fuga assumenda.
                  </p>
                </div>
              </div>
              <div className="rounded-tl-[400px] rounded-br-[400px] overflow-hidden ">
                <img src={work.img} alt="img" className="object-cover h-full" />
              </div>
            </div>
          ) : (
            <div
              key={work.id}
              className="h-[485px] overflow-hidden grid grid-cols-2 gap-5 mt-20 md:mt-28">
              <div className="rounded-tr-[400px] rounded-bl-[400px] overflow-hidden">
                <img src={work.img} alt="img" className="object-cover h-full" />
              </div>
              <div className="flex flex-col justify-between md:px-12">
                <h3 className="text-5xl md:text-8xl text-[#C76904] text-end font-dm-serif">
                  0{work.id}
                </h3>
                <div>
                  <h5 className="mb-3 text-2xl md:text-4xl font-dm-serif">
                    {work.title}
                  </h5>
                  <p>
                    {work.description}Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Veritatis autem, amet quod corrupti neque
                    cupiditate exercitationem labore cum fuga assumenda.
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HowWeWork;
