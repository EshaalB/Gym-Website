import React from "react";
import img from "../assets/img/about.png";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 text-2xl ">
          <p>
            Your well-being is your greatest wealth. Whether it's achieving
            optimal health or enhancing your fitness journey, we're here to
            support you every step of the way.
            <p>
              At our fitness center, our team of certified personal trainers,
              attentive staff, and experienced management are dedicated to
              fostering a nurturing environment.
            </p>
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
