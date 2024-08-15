import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="max-padd-container pt-[99px]">
      <div className="max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl">
        <div className="relative top-32 xs:top-52">
          <span className="medium-18">Welcome to CasaCentral</span>
          <h1 className="h1 capitalize max-w-[40rem]">
            Discover Exceptional Homes with CasaCentral
          </h1>
          <p className="my-10 max-w-[33rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            nulla velit, pariatur ipsum vitae quia quisquam porro, voluptates
            quod quam, minima iusto incidunt expedita harum natus alias repellat
            amet ullam!
          </p>

          {/* Buttons*/}

          <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl">
            <div className="text-center regular-14 leading-tight pl-5">
              <h5 className="uppercase font-bold">10% off</h5>
              <p className="regular-14">On All Properties</p>
            </div>
            <Link
              to={"/listing"}
              className="btn-secondary rounded-xl flexCenter py-5"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
