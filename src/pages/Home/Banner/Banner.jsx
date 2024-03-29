import Button from "../../../components/Button/Button";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
      className="bg-cover rounded-tl-[100px] rounded-br-[100px] h-[758px]">
      <div className="flex flex-col justify-center w-10/12 h-full gap-4 pl-8 md:w-8/12 lg:w-7/12 text-amber-400">
        <h2 className="text-4xl md:text-6xl font-dm-serif">
          Let&apos;s make your <br /> home beautiful together
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro
          quas dolor quae atque ut rem perspiciatis beatae ullam nihil.
        </p>
        <Button
          text="Get Started"
          bgColor="bg-[#CDA274]"
          textColor="text-white"
        />
      </div>
    </div>
  );
};

export default Banner;
