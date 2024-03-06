const Follow = () => {
  const houses = [
    {
      img: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/2416932/pexels-photo-2416932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/376531/pexels-photo-376531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      img: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="my-32">
      <div className="text-center w-8/12 mx-auto mb-16">
        <h2 className="font-dm-serif text-5xl mb-4">Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-16">
        {houses.map((house, index) => (
          <div key={index}>
            <div className="h-[548px] rounded-tr-[250px] overflow-hidden">
              <img
                src={house.img}
                alt="house"
                className="object-cover h-full"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h5 className="font-dm-serif text-2xl">Modern Bedroom</h5>
                <p>Decor / Architecture</p>
              </div>
              <div>
                <span className="bg-[#CDA274] p-4 h-3 rounded-full text-white ">
                  &gt;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Follow;
