import Button from "../../../components/Button/Button";
import call from "../../../assets/images/img_call.svg";

const CallUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-28 h-[700px]">
      <div
        className="rounded-tr-[380px] bg-cover"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}>
        <div className="h-full flex flex-col gap-5 w-3/4 pl-3 md:pl-5 justify-center">
          <h3 className="text-3xl md:text-5xl text-amber-400 font-dm-serif">
            We create art for modern life
          </h3>
          <p className="text-amber-400">
            There are many variations of the passages of lorem Ipsum from
            available, majority.
          </p>
          <div className="flex  gap-2 items-center">
            <div className="bg-white p-5 rounded-full">
              <img src={call} alt="call" />
            </div>

            <p className="text-white font-medium">
              0215794674651 <br />
              Call Us Anytime
            </p>
          </div>
          <Button
            text="Get Free Estimate"
            bgColor="bg-[#CDA274]"
            textColor="text-white"
          />
        </div>
      </div>
      <div
        className="rounded-bl-[380px] bg-cover"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}></div>
    </div>
  );
};

export default CallUs;
