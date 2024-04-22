import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-zinc-800 to-zinc-700 from-10%" id="about">
      <h1 className=" pt-3 text-white font-roboto text-2xl text-center font-thin md:text-3xl lg:text-4xl lg:mb-2"> About Me</h1>
      <div className="p-4 container mx-auto md:flex md:px-10 lg:px-28 md:items-center ">
        <div className=" bg-red-500 w-40 h-48 mx-auto md:w-[1500px] md:mr-7 lg:mr-11">
          <img src="../assets/asset-ucup.png" className="object-cover w-full h-full" alt="" />
        </div>
        <p className=" mt-4 text-justify text-slate-400 font-mono text-sm md:mt-0 lg:text-md xl:text-lg">Hi!👋👋 I'm Yusup Maulana, a graduate of the Information Systems Study Program at Institut Teknologi Adhi Tama Surabaya. I am a full stack developer. During my college years, I was actively involved in various organizations, namely Laboratory Assistant and Surabaya Dev. Apart from that, during my studies, I was also active with my friends working on several website projects for several companies. This can give me the opportunity to develop skills in programming, working in a team, and managing projects efficiently. If you are interested in discussing further or have any questions, please feel free to contact me. Thank you for visiting my page!</p>
      </div>
    </section>
  );
};

export default About;
