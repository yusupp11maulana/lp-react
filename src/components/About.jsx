import React from "react";
import Gambar from "../assets/Ucup-bg.png";

const About = () => {
  return (
    <section className="bg-neutral-800 pb-3 md:pb-7">
      <h1 className="text-center text-white text-3xl font-medium font-viga md:mb-5 pt-5">
        About <span className="text-sky-500">Me</span>
      </h1>
      <div className="container mx-auto md:flex md:items-center">
        <div className="w-auto p-5 md:w-1/2">
          <div className="w-3/4 h-3/4 mx-auto p-2 rounded-lg border-4 border-sky-500 md:h-auto md:w-auto">
            <img src={Gambar} alt="" className="rounded-lg object-contain" />
          </div>
        </div>
        <div className="w-auto h-auto px-5 md:w-full">
          <p className="text-white mb-3 text-justify">
            Hello!👋👋👋 My name is <span className="text-sky-500 font-mono font-medium">Yusup Maulana</span>, I graduated in Information System at Institut Teknologi Adhi Tama Surabaya. I'm full stack developer and interested in web development. During the lecture period, I actively participated in internal campus organizations, namely the Information Systems Laboratory Assistant and external campus organizations, namely{" "}
            <span className="text-green-500 font-viga">
              <a href="https://www.surabayadev.org">Surabaya Dev</a>
            </span>
            .
          </p>
          <p className="text-white text-justify">Apart from that, I and my college friends worked on several projects from several companies to improve the web development skills that we had received during the lecture period.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
