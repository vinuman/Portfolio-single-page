import React from "react";
import Button from "./Components/Button";

const Projects = () => {
  return (
    <>
      <section className=" p-4 bg-primary">
        <div className="flex justify-around items-center">
          <h1 className=" w-1/2 text-4xl text-white">Projects</h1>
          <Button className=" w-1" text="Home" />
        </div>
      </section>
    </>
  );
};

export default Projects;
