import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h2 className="text-[#CDA274] text-9xl font-dm-serif">404</h2>
      <p className="font-dm-serif text-3xl">
        We&apos;re sorry,but the page you requested was not found.
      </p>
      <Link to="/">
        <Button
          text="Back To Home"
          bgColor="bg-[#292F36]"
          textColor="text-white"
        />
      </Link>
    </div>
  );
};

export default PageNotFound;
