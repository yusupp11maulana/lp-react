import React from "react";

const Hero = () => {
  return (
    <section className="bg-zinc-800">
      <div className="container mx-auto pt-16 px-4 flex flex-col justify-center md:flex-row md:items-center md:justify-start md:space-x-16 xl:space-x-28 2xl:space-x-52">
        <img src="../assets/asset-no-bg.png" alt="" className="h-56 object-contain mb-6 md:hidden" />
        <div className="text-center mb-8 md:text-left md:mb-0">
          <h1 className="text-white text-xl tracking-widest font-semibold font-viga lg:text-4xl">I'm Yusup Maulana</h1>
          <p className="text-slate-400 text-lg lg:text-xl mb-3">Full Stack Developer</p>
          <a href="#about" className="border rounded-full py-2 px-6 text-xs text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-white transition duration-200 cursor-pointer focus:ring-4 lg:text-sm md:text-sm">
            About Me
          </a>
        </div>
        <img src="../assets/asset-no-bg.png" alt="" className="h-60 object-contain hidden md:block lg:h-96" />
      </div>
    </section>
  );
};

export default Hero;
