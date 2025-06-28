import React from "react";
import heroimg from "../assets/heroimg.png";

function Hero() {
  const heroContent = [
    {
      count: "200",
      title: "International Brands",
    },
    {
      count: "2,000",
      title: "High-Quality Products",
    },
    {
      count: "30,000",
      title: "Happy Customers",
    },
  ];
  return (
    <>
      <section className="bg-[#F2F0F1] pt-10 ll:flex xll:h-screen">
        <div className="px-4">
          <h1 className="text-4xl font-bold text-black font-family-integral-cf leading-[31px] mb-5">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className="text-sm font-sans mb-6 text-black-60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <a href="" className="block py-5 bg-black text-white text-base font-medium font-family-Satoshi rounded-full text-center mb-5">Shop Now</a>
          <div className="flex flex-wrap justify-center gap-5">
            {heroContent.map((count, index) => {
              return (
                <div key={index}>
                  <h1 className="text-2xl text-black font-bold font-family-Satoshi">{count.count}+</h1>
                  <p className="text-12 font-family-Satoshi text-black-60">{count.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
            <img src={heroimg} alt="heroimg" height="663px" width="628px" className="h-[448px] w-full ll:w-[628px]" />
        </div>
      </section>
    </>
  );
}

export default Hero;
