"use client";
import ChatButton from "@/Components/ChatButton";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import OurServices from "@/Components/OurServices";
import StatisticCard from "@/Components/StatisticCard";
import { useState, useEffect } from "react";

export default function Home() {
  // --- Gambar untuk carousel ---
  const images = [
    "/images/homepage/Frame1.png",
    "/images/homepage/Frame2.png",
    "/images/homepage/Frame3.png",
    "/images/homepage/Frame4.png",
    "/images/homepage/Frame5.png",
    "/images/homepage/Frame6.png",
    "/images/homepage/Frame7.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Efek untuk auto-slide setiap 3 detik ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="font-poppins text-[#02353C] min-w-screen overflow-x-hidden w-full pt-[60px] sm:pt-[60px] md:pt-[40px] lg:pt-[20px]">
      {/* Hero */}
      <section
        className="relative bg-cover bg-center lg:h-[700px] h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/homepage/bg1.png')" }}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Konten hero */}
        <div className="relative text-center text-[#CEEBFF]">
          <h1 className="lg:text-7xl text-5xl sm:text-4xl md:text-6xl font-montserrat font-bold">
            <span className="text-[#B9F443]">M-Knows</span>{" "}
            <span className="text-[#4697CE]">Consulting</span>
          </h1>
          <p className="lg:text-5xl md:text-4xl text-3xl mt-7 text-[39px] font-montserrat text-white">
            A Meaningful, Contemporary, and Cutting Edge Learning
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-white mx-auto">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center lg:justify-start lg:items-start">
            <h2 className="text-6xl font-montserrat font-bold text-left mb-10 text-[#065346]">
              <span className="text-[#B9F443]">About</span>{" "}
              <span className="text-[#4697CE]">Us</span>
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center lg:flex-row md:flex-col md:items-center gap-12">
            {/* Deskripsi */}
            <div className="md:w-2/3 lg:w-full w-full space-y-6 font-montserrat text-[27px] text-black">
              <p className="text-justify text-2xl md:text-3xl lg:text-3xl">
                M-Knows Consulting adalah merek bersama milik PT. Menara
                Indonesia dan PT. Menara Pengetahuan Indonesia, yang bergerak di
                bidang konsultasi manajemen, solusi digital, dan pelatihan
                profesional. Berkantor di Jakarta dan Surabaya.
              </p>
              <p className="text-justify text-2xl md:text-3xl lg:text-3xl">
                M-Knows telah sukses bermitra dengan berbagai perusahaan
                nasional dan multinasional, melalui pendekatan applicative
                contemporary, high impact, fun & motivational.
              </p>
            </div>

            {/* Carousel Gambar */}
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[350px] lg:w-[650px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`About M-Knows ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <div className="flex flex-col md:flex-col sm:flex-col justify-center items-center gap-y-[40px]">
        <section className="bg-white text-center">
          <div className="mx-auto text-center w-full md:w-[80%] lg:w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6">
              <span className="text-[#B9F443]">Our</span>{" "}
              <span className="text-[#4697CE]">Statistics</span>
            </h2>
            <p className="text-[#02353C] mb-10 text-[20px] md:text-3xl lg:text-3xl font-montserrat">
              Pencapaian dan dedikasi kami dalam memberikan layanan terbaik
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <StatisticCard
              value={20}
              label="Years"
              description="of Experience"
              iconType="experience"
            />
            <StatisticCard
              value={2400}
              label="In-House"
              description="Training"
              iconType="inhouse"
            />
            <StatisticCard
              value={800}
              label="Public"
              description="Training"
              iconType="public"
            />
            <StatisticCard
              value={750}
              label="Happy"
              description="Clients"
              iconType="happy"
            />
          </div>
        </section>

        {/* Komitmen */}
        <section className="bg-white text-center w-[310px] lg:w-[800px] md:w-[410px] p-3">
          <div className="bg-[#02353C] mx-auto text-center w-full rounded-2xl p-3">
            <p className="text-white font-montserrat text-[15px] lg:text-2xl md:text-2xl font-semibold leading-relaxed">
              Kami berkomitmen memberikan layanan terbaik untuk mendukung
              pertumbuhan organisasi Anda.
            </p>
          </div>
        </section>

        {/* Our Services */}
        <OurServices />
      </div>
    </div>
  );
}
