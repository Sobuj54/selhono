import Button from "../../../components/Button/Button";

const BottomHero = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        height: "430px",
      }}
      className="mt-20 bg-cover">
      <div className="w-8/12 lg:w-1/2 mx-auto items-center h-full flex flex-col justify-center  gap-5 text-white">
        <h3 className="text-3xl md:text-6xl font-dm-serif text-center">
          Wanna Join The Interno?
        </h3>
        <p className="text-base md:text-xl text-center">
          It is a long established fact will be distracted.
        </p>
        <Button
          text="Contact With Us"
          bgColor="bg-[#CDA274]"
          textColor="text-white"
        />
      </div>
    </section>
  );
};

export default BottomHero;
