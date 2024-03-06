const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:justify-evenly my-20 lg:my-48">
      <div className="text-center">
        <h2 className="font-dm-serif text-6xl text-[#CDA274] mb-2">12</h2>
        <p>Years Of Experience</p>
      </div>
      <div className="w-[2px] hidden md:block h-20 bg-[#CDA274]" />

      <div className="text-center">
        <h2 className="font-dm-serif text-6xl text-[#CDA274] mb-2">1074</h2>
        <p>Successful Projects</p>
      </div>
      <div className="w-[2px] hidden md:block h-20 bg-[#CDA274]" />

      <div className="text-center">
        <h2 className="font-dm-serif text-6xl text-[#CDA274] mb-2">98</h2>
        <p>Active Projects</p>
      </div>
      <div className="w-[2px] h-20 hidden md:block bg-[#CDA274]" />

      <div className="text-center">
        <h2 className="font-dm-serif text-6xl text-[#CDA274] mb-2">583</h2>
        <p>Happy Customers</p>
      </div>
    </section>
  );
};

export default Experience;
