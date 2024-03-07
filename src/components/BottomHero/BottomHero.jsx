import Button from "../Button/Button";

const BottomHero = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        height: "430px",
      }}
      className="mt-20 bg-cover">
      <div className="flex flex-col items-center justify-center w-8/12 h-full gap-5 mx-auto text-white lg:w-1/2">
        <h3 className="text-3xl text-center md:text-6xl font-dm-serif">
          Wanna Join The Interno?
        </h3>
        <p className="text-base text-center md:text-xl">
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
