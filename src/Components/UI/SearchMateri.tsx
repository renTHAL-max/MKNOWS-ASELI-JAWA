"use client";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm";
import { SearchContext } from "@/hooks/CreateContextMateri";
import { Materi } from "@/Types/Materi";
import searchMateri from "@/hooks/searchMateri";
import CardMateri from "../CardMateri";
import { fetchData } from "@/Services/api_service";
import Footer from "../Footer";
import Link from "next/link";

const SearchMateri = ({ staticDataMateri }: { staticDataMateri: Materi[] }) => {
  const [keyword, setKeyword] = useState("");

  const [data, setData] = useState<Materi[]>(staticDataMateri);

  useEffect(() => {
    const getDataMateri = async () => {
      const res = await fetchData.get("/materi-training");
      const data = res.data;
      setData(data);
    };

    getDataMateri();
  }, [staticDataMateri]);

  const materi = searchMateri(keyword, data);
  return (
    <>
      <div className="flex flex-col justify-center items-center px-3 py-3">
        <div className="flex flex-col justify-center items-center pt-2.5 pt-[180px]">
          <h1 className="capitalize font-montserrat font-bold text-[25px] md:text-[48px] lg:text-[48px]">
            public training tahun 2027
          </h1>
          <SearchContext.Provider value={{ keyword, setKeyword }}>
            <SearchForm name="search" />
          </SearchContext.Provider>
        </div>

        <div className="w-full flex justify-center pt-[80px]">
          <div className="grid gap-x-11 gap-y-[25px] place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {materi.length > 0 ? (
              materi.map((item, index) => {
                const isLastData = index === materi.length - 1;
                const isData1 = materi.length % 3 === 1;

                return (
                  <div
                    key={index}
                    className={`
              ${
                isLastData && isData1
                  ? "lg:col-span-3 flex justify-center"
                  : "flex items-center justify-center"
              }
            `}
                  >
                    <CardMateri
                      imageSrc={item.imageSrc}
                      alt={item.alt}
                      title={item.title}
                      slug={item.slug}
                      buttonSrc={item.buttonSrc}
                    />
                  </div>
                );
              })
            ) : (
              <p className="col-span-3 text-center font-semibold text-gray-500 text-[50px]">
                Data tidak ditemukan
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center items-center pt-[50px] pb-[50px]">
          <Link href="/training/contact" className="no-underline">
            <button className="border bg-[#ffff] px-5 py-2 text-center rounded-[20px] bg-green-600 hover:bg-green-700 hover:translate-y-[-20px]">
              <p className="font-montserrat font-regular text-[16px] lg:text-[32px] text-white">
                Download Jadwal Public Training Tahun 2027
              </p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SearchMateri;
