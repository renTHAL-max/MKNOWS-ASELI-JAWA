"use client";
import { fetchData } from "@/Services/api_service";
import { CardHouseTrainingProps } from "@/Types/CardHouseTraining";
import { useEffect, useState } from "react";
import CardHouseTraining from "../CardHouseTraining";
import { CardClientProps } from "@/Types/CardClient";
import CardClient from "../CardClient";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Footer from "../Footer";

const InHouseTraining = ({
  staticDataHouseTraining,
  staticDataClient,
}: {
  staticDataHouseTraining: CardHouseTrainingProps[];
  staticDataClient: CardClientProps[];
}) => {
  const [data, setData] = useState<CardHouseTrainingProps[]>(
    staticDataHouseTraining
  );

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData.get(`/CardHouse`);
      const data = res.data;
      setData(data);
    };

    getData();
  }, [staticDataHouseTraining]);

  const [dataClient, setDataClient] =
    useState<CardClientProps[]>(staticDataClient);

  useEffect(() => {
    const getDataClient = async () => {
      const res = await fetchData.get(`/CardClient`);
      const data = res.data;
      setDataClient(data);
    };

    getDataClient();
  }, [staticDataClient]);
  return (
    <section className="gap-y-[10px] overflow-x-hidden py-[5px] min-w-screen min-h-screen">
      <div className="w-full h-[651px] flex relative items-center justify-center">
        <img
          src="/images/in-house-training/bg-in-house-training.png"
          alt="Image Laptop"
          className="object-cover w-full lg:h-full md:h-[680px] h-[1100px] pt-[100px] relative z-0"
        />
      </div>
      <div className="flex flex-col items-center lg:justify-center mx-auto inset-0 z-20 absolute pb-[20px] pt-[180px] md:pt-[150px] lg:pt-0 gap-y-[20px]">
        <div className="flex justify-center mx-auto left-0 right-0 text-center lg:text-center md:text-center">
          <h1 className="w-[526px] text-[35px] md:text-[40px] lg:text-[48px] font-montserrat font-bold text-[#FFFFFF]">
            In-House Training
          </h1>
        </div>
        <p className="text-white font-poppins text-[16px] md:text-[18px] lg:text-[20px] w-[380px] md:w-[650px] lg:w-[1100px] text-center leading-[1.8] px-4 py-3">
          In House Training merupakan program pelatihan yang diselenggarakan
          oleh <span className="font-semibold">M-KNOWS CONSULTING</span> bekerjasama dengan Perusahaan atau Instansi
          pemerintah untuk meningkatkan skill karyawan sehingga meningkatkan
          keunggulan kompetitif di bidang Sumberdaya Manusia dengan materi,
          contoh studi kasus dan konsep pelaksanaan yang dikustomisasi sesuai
          kebutuhan perusahaan atau instansi.
        </p>
      </div>
      {/* About Program Section */}
      <div className="flex flex-col justify-center items-center pt-[100px] md:pt-[60px] lg:pt-[80px] pb-[60px] px-5 bg-gray-50">
        <h1 className="font-montserrat font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#02353C] mb-8 text-center">
          Tentang Program
        </h1>
        <p className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] max-w-[1000px] text-center leading-[1.9] text-gray-800 px-4">
          Kami membantu mendesain konsep training, kurikulum, materi, dan jadwal
          yang dapat disesuaikan dengan kebutuhan perusahaan. Pelatihan dapat
          dilaksanakan di lokasi Anda maupun secara hybrid.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch pb-[80px] px-5 max-w-[1100px] mx-auto">
        <div className="flex-1 rounded-xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-montserrat font-bold text-[20px] md:text-[22px] text-[#02353C] mb-5">
            Pengalaman sejak 2003
          </h3>
          <p className="font-poppins text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-[1.8]">
            Menyelenggarakan in‑house training di banyak perusahaan dan instansi
            pemerintah. Metode singkat, padat, dan praktis langsung dapat
            diterapkan setelah pelatihan.
          </p>
        </div>
        
        <div className="flex-1 rounded-xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <h3 className="font-montserrat font-bold text-[20px] md:text-[22px] text-[#02353C] mb-5">
            Durasi Fleksibel
          </h3>
          <p className="font-poppins text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-[1.8]">
            Kelas kecil (10–20 orang) hingga kelas besar (50+). Jadwal & materi
            disesuaikan kebutuhan. Tersedia program pasca pelatihan melalui LMS
            selama 3 bulan.
          </p>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="flex flex-col justify-center items-center gap-y-[50px] px-5 py-[90px] bg-[#245454]">
        <h2 className="font-montserrat font-bold text-[28px] md:text-[36px] lg:text-[44px] text-white text-center">
          Kenapa In-House Training Kami
        </h2>
        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-stretch gap-6 max-w-[1300px] w-full">
          {data.length > 0 &&
            data.map((item) => <CardHouseTraining key={item.id} {...item} />)}
        </div>
      </div>
      {/* Our Clients Section */}
      <div className="flex flex-col justify-center items-center gap-y-8 py-[90px] px-5">
        <h2 className="font-montserrat font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#02353C]">
          Our Clients
        </h2>
        <div className="rounded-2xl w-full max-w-[1100px] bg-white shadow-xl border border-gray-100 p-8">
          {dataClient.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center">
              {dataClient.map((item) => (
                <CardClient key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>
        
        {/* View More Button */}
        <a 
          href="/more/clients-page"
          className="mt-6 px-8 py-4 bg-[#70B946] hover:bg-[#5fa037] rounded-xl text-white font-montserrat font-bold text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
        >
          <span>View More Clients</span>
          <FaArrowAltCircleRight className="text-[20px] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default InHouseTraining;
