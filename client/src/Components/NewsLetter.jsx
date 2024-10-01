import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex item-center gap-2">
          <FaEnvelopeOpenText />
          Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Feel free to reach out to me for job opportunities. I'm open to
          discussing potential roles that align with my skills and experience.
        </p>
      </div>
      <div className="w-full space-y-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@mail.com"
          className="w-full block py-2 pl-3 border focus:outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="w-full block py-2 pl-3 border bg-blue rounded-sm  focus:outline-none text-white cursor-pointer font-semibold"
        />
      </div>
      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex item-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-primary/75 text-base mb-4"></p>
      </div>
      <div className="w-full space-y-4">
        <input
          type="submit"
          value="Upload your Resume"
          className="w-full block py-2 pl-3 border bg-blue rounded-sm  focus:outline-none text-white cursor-pointer font-semibold"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
