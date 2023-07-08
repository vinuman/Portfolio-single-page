import github from "./images/icon-github.svg";
import frontendmentor from "./images/icon-frontend-mentor.svg";
import linkedin from "./images/icon-linkedin.svg";

const Nav = () => {
  return (
    <div className=" flex justify-between px-20 py-8 2xl:px-40 2xl:py-8 bg-primary">
      <p className=" hidden sm:block text-white text-3xl font-bold">
        vinuCyril
      </p>
      <div className="flex justify-between w-64">
        <a href="https://github.com/vinuman" target="_blank">
          <img className=" w-8 h-8" src={github} alt="logo"></img>
        </a>
        <a href="https://www.frontendmentor.io/profile/vinuman" target="_blank">
          <img className=" w-8 h-8" src={frontendmentor} alt="logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/vinu-cyril-a3936b154/"
          target="_blank"
        >
          <img className=" w-8 h-8" src={linkedin} alt="logo"></img>
        </a>
      </div>
    </div>
  );
};

export default Nav;
