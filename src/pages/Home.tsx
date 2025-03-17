import logo from "../assets/logo.png";

export default function Home() {
  return (
    <>
      <div className="flex justify-center align-center">
        <img
          src={logo}
          className="max-h-40 dark:brightness(10) dark:invert-100 light:brightness(0) light:invert-0"
          alt="Platello"
        />
      </div>
    </>
  );
}
