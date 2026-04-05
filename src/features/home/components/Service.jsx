import React from "react";
import { icons, service_card } from "../../../assets/icons/icons";
import { Link } from "react-router-dom";
import ServiceCard from "../../../components/ui/ServiceCard";

const Service = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* =====================Service Heading ==================== */}
        <div className="flex justify-between">
          <div className="">
            <h2 className="[font-family:var(--font-monrope)] font-bold sm:font-extrabold text-headline-md">
              Specialized Care Services
            </h2>
            <p className="text-body-lg text-[var(--on-surface-variant)]">
              Comprehensive health solutions tailored to your individual needs.
            </p>
          </div>
          <Link
            to={"/services"}
            className="text-[var(--primary)]  flex items-center gap-2"
          >
            View all services <img src={icons.right_arrow} alt="Right Arrow" />
          </Link>
        </div>

        {/* =====================Service Cards ==================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {service_card.map((service, index) => (
            <ServiceCard
              name={service.name}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
