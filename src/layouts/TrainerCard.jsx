import React from "react";
import { BsInstagram, BsTwitter, BsFacebook, BsTwitterX } from "react-icons/bs";

const TrainerCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-5 pt-9 pb-4 w-full md:w-1/4 bg-[#222] rounded-xl">
      <div className="w-3/4">
        <img
          className="rounded-lg hover:scale-105"
          src={props.img}
          alt="Trainer"
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-semibold py-2">{props.name}</h1>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram
              size={25}
              className="hover:text-[#e53961] cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook
              size={25}
              className="hover:text-[#4267B2] cursor-pointer"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX
              size={25}
              className="hover:text-[#3f4549] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
