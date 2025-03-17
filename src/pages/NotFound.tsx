import NotFoundImg from "../assets/not-found.png";

export default function NotFound() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className="flex justify-center align-center order-1 md:order-2">
        <img
          src={NotFoundImg}
          alt="Not found"
          className="max-h-[300px] md:max-h-[400px]"
        />
      </div>

      <div className="flex flex-col justify-center align-center order-2 md:order-1">
        <h2 className="font-extra-bold text-center">
          {`Uh oh, looks like this page wasn't found!`}
        </h2>
        <p className="font-light text-center text-[18px]">
          {`The page you are looking for might have been removed or is temporarily unavailable. Please try again later.`}
        </p>
      </div>
    </div>
  );
}
