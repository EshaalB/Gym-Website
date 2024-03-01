import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-end md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center md:w-1/3 text-left">
        <h1 className="text-8xl font-semibold">Discover your strength!</h1>

        <div className="mt-5 flex justify-center">
          <Button title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Home;
