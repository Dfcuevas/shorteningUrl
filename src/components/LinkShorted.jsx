import React from "react";
import { useState } from "react";

export const LinkShorted = (props) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    setCopy(!copy);
  };

  return (
    <div className="px-4 relative mb-10 xl:px-24">
      {props.links.map((link, id) => {
        return (
          <div
            key={id}
            className="bg-white rounded-md p-4 mb-4 xl:flex xl:justify-between "
          >
            <div className="xl:flex xl:items-center xl:justify-between xl:basis-11/12">
              <p className="text-veryDarkViolet border-b-[1px] border-b-grayCustom pb-2 mb-2 xl:border-0 xl:mb-0 xl:pb-0 xl:block">
                {link.originalLink}
              </p>
              <a className="block text-cyanCustom" href="#">
                {link.shortedLink}
              </a>
            </div>
            <a
              className="bg-cyanCustom cursor-pointer py-1 px-2 flex justify-center rounded-md mt-2 text-white xl:mt-0"
              href="#"
              onClick={handleCopy}
            >
              {!copy ? "Copy" : "Copied!"}
            </a>
          </div>
        );
      })}
    </div>
  );
};
