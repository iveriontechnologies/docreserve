import React from "react";
import { icons, not_found_card } from "../assets/icons/icons";
import NotFoundCard from "../features/notFound/components/NotFoundCard";

const NotFoundPage = () => {
  return (
    <div className="py-20 flex items-center justify-center bg-[var(--surface)] w-full">
      <div className="container flex flex-col items-center justify-center">
        <div>
          <img
            src={icons.display404}
            alt="404"
            className="w-full max-w-[200px] sm:max-w-xs"
          />
        </div>

        <div>
          <h2 className="w-full sm:w-xl [font-family:var(--font-monrope)] text-[32px] sm:text-[48px] font-bold text-center">
            We've lost the connection to this page.
          </h2>
          <p className="w-full sm:w-142 [font-family:var(--font-inter)] text-[var(--on-surface-variant)] text-[16px] sm:text-[18px] font-normal mt-4 text-center">
            The link you followed may be broken, or the page has been moved. Our
            medical records are intact, but this path is currently unavailable.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {not_found_card.map((item, index) => (
            <div
              key={index}
              className={`
      ${index === 2 ? "md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:block" : ""}
    `}
            >
              <NotFoundCard
                name={item.name}
                text={item.text}
                icon={item.icon}
                color={item.color}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
