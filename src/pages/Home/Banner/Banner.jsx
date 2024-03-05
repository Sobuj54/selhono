import Button from "../../../components/Button/Button";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
      className="bg-cover rounded-tl-[100px] rounded-br-[100px] mx-4 lg:mx-8 h-[758px] mt-5">
      <div className="flex flex-col justify-center w-10/12 h-full gap-4 pl-8 md:w-8/12 lg:w-1/2 text-amber-400">
        <h2 className="text-4xl md:text-6xl font-dm-serif">
          Let&apos;s make your <br /> home beautiful together
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit porro
          quas dolor quae atque ut rem perspiciatis beatae ullam nihil.
        </p>
        <Button text="Get Started" bgColor="#CDA274" />
      </div>
    </div>
  );
};

export default Banner;
