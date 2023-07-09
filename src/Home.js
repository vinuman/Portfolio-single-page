import Button from "./Components/Button";
import profilepic from "./images/4.jpg";
import patternrings from "./images/pattern-rings.svg";

const Home = () => {
  return (
    <>
      <img
        className="absolute -left-20 top-28"
        src={patternrings}
        alt="bg pattern"
      ></img>
      <div className=" flex flex-col-reverse px-2 py-4 sm:px-20 sm:py-8 bg-primary sm:flex-row">
        <div className=" flex flex-col justify-around items-end">
          <h1 className=" text-white text-5xl text-center py-4 sm:text-7xl">
            Nice to meet you! I’m{" "}
            <span className="underline decoration-secondary">Vinu Cyril</span>
          </h1>
          <p className=" text-white text-2xl text-center py-4 sm:text-3xl">
            Based in Bangalore, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <Button text="Projects" />
        </div>
        <div className="flex justify-center">
          <img
            className=" w-2/3 grayscale"
            src={profilepic}
            alt="profile image"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
