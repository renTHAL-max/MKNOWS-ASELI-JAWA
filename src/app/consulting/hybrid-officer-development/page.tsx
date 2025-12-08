import React from "react";

interface SectionProps {
  title: React.ReactNode;
  bgType: "white" | "green" | "dark";
  children: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  imageRight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  bgType,
  children,
  imageUrl,
  imageAlt,
  imageRight = false,
}) => {
  // SECTION WHITE (dengan kotak putih tengah)
  if (bgType === "white") {
    return (
      <section
        className="rounded-3xl p-[3px] shadow-xl"
        style={{ background: "#FFFFFF" }}
      >
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className={`p-6 sm:p-8 md:p-10 ${
                imageRight ? "order-1 md:order-2" : "order-1"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3B8EC3] to-[#1C445D] bg-clip-text text-transparent leading-tight">
                {title}
              </h2>
              <div className="text-gray-700 space-y-4">{children}</div>
            </div>

            <div
              className={`relative h-48 sm:h-64 md:h-auto ${
                imageRight ? "order-2 md:order-1" : "order-2"
              }`}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // SECTION GREEN / DARK (layout baru)
  return (
    <section
      className="rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-6"
      style={{
        background:
          bgType === "green"
            ? "linear-gradient(to bottom right, #5D866C, #02353C)"
            : "#02353C",
      }}
    >
      <div
        className={`bg-white rounded-2xl p-6 sm:p-8 md:p-10 ${
          imageRight ? "order-1 md:order-2" : "order-1"
        }`}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3B8EC3] to-[#1C445D] bg-clip-text text-transparent leading-tight">
          {title}
        </h2>
        <div className="text-gray-700 space-y-4">{children}</div>
      </div>

      <div
        className={`relative h-48 sm:h-64 md:h-auto rounded-2xl overflow-hidden ${
          imageRight ? "order-2 md:order-1" : "order-2"
        }`}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default function HybridOfficerPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #EEEEEE, #02353C)",
      }}
    >
      {/* HERO SECTION */}
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] pt-[120px]">
        <img
          src="/images/hybrid-officer-development/gambarhod1.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Hybrid Officer Development
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-[#BFF932] font-semibold mt-2">
            Crash Program for Financial Industry
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <main className="container mx-auto max-w-5xl py-10 space-y-8 px-4 sm:px-6">
        <Section
          title={
            <>
              Hybrid Officer Development
              <br />
              Cash Program For Financial Industry
            </>
          }
          bgType="green"
          imageUrl="/images/hybrid-officer-development/gambarhod2.png"
          imageAlt="Hybrid Officer"
          imageRight={false}
        >
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            Creating Competent Professionals In Sales, Credit & Collection
            (Pelatihan, Magang, Bekerja).
          </p>
        </Section>

        <Section
          title="Deskripsi Program ODCP"
          bgType="white"
          imageUrl="/images/hybrid-officer-development/gambarhod3.png"
          imageAlt="Deskripsi Program"
          imageRight={true}
        >
          <p className="text-base sm:text-lg md:text-xl">
            Officer Development Crash Program adalah program pelatihan & magang
            yang merupakan penciptaan kompetensi di bidang Sales, Credit &
            Collection, guna menghasilkan SDM yang produktif dan berkinerja
            tinggi.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Penguatan kompetensi dilakukan berupa pelatihan selama 1 bulan di
            M-Knows, fokus pada role play dan drill, ditutup dengan uji
            kompetensi.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Mereka yang lulus uji kompetensi, disalurkan untuk 1 bulan magang di
            perusahaan (Bank, Multi Finance, Fintech dan Asuransi). Bagi yang
            berkinerja tinggi akan ditawarkan untuk bekerja di perusahaan yang
            berpartisipasi.
          </p>
        </Section>

        <Section
          title="Lingkup Project Hybrid Officer Development Crash Program"
          bgType="white"
          imageUrl="/images/hybrid-officer-development/gambarhod4.png"
          imageAlt="Lingkup Project"
          imageRight={false}
        >
          <ol className="list-decimal ml-5 space-y-2 text-base sm:text-lg md:text-xl text-gray-700">
            <li>Recruitment & Seleksi</li>
            <li>Kontrak kerja & Orientasi</li>
            <li>Pelatihan berbasis kompetensi</li>
            <li>Roleplay, Drill & Penilaian</li>
            <li>Magang di perusahaan</li>
            <li>Coaching & Mentoring</li>
            <li>Evaluasi & kelulusan</li>
            <li>Pembuatan laporan individual</li>
            <li>Penawaran untuk bekerja di perusahaan yang berpartisipasi.</li>
          </ol>
        </Section>

        <Section
          title="Proces Recruitment & On Boarding"
          bgType="green"
          imageUrl="/images/hybrid-officer-development/gambarhod5.png"
          imageAlt="Recruitment"
          imageRight={true}
        >
          <ol className="list-decimal ml-5 space-y-2 text-base sm:text-lg md:text-xl text-gray-700">
            <li>Recruitment 300 mahasiswa dilakukan</li>
            <li>Persyaratan seleksi mahasiswa tingkat skripsi</li>
            <li>Pembuatan Kontrak kerja dan MOU dengan universitas</li>
            <li>Mahasiswa melakukan onboarding dan mengikuti pelatihan</li>
          </ol>
        </Section>

        <Section
          title="Kerangka Program (Project Framework)"
          bgType="white"
          imageUrl="/images/hybrid-officer-development/gambarhod6.png"
          imageAlt="Kerangka Program"
          imageRight={false}
        >
          <p className="text-base sm:text-lg md:text-xl">
            Aktivitas magang dirancang agar mahasiswa diterima bekerja di
            perusahaan keuangan.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Pendekatan kerja menggunakan SCRUM Framework
          </p>
          <ul className="list-disc pl-[20px] text-base sm:text-lg md:text-xl">
            <li>Sprint Planning</li>
            <li>Daily SCRUM</li>
            <li>SPRINT Review</li>
            <li>SPRINT Retrospective</li>
            <li>Improvement</li>
          </ul>
        </Section>

        <Section
          title="Proses Pelatihan di Kampus Gratis"
          bgType="white"
          imageUrl="/images/hybrid-officer-development/gambarhod7.png"
          imageAlt="Pelatihan"
          imageRight={true}
        >
          <p className="text-base sm:text-lg md:text-xl">
            Materi diberikan secara synchronous & asynchronous
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Zoom untuk mentoring & tugas
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Evaluasi berupa role play, drill, studi kasus dan uji kompetensi
          </p>
        </Section>

        <Section
          title="Monitoring & Evaluasi"
          bgType="dark"
          imageUrl="/images/hybrid-officer-development/gambarhod8.png"
          imageAlt="Monitoring"
          imageRight={false}
        >
          <p className="text-gray-700 text-base sm:text-lg md:text-xl">
            Peserta dimonitor berdasarkan:
          </p>
          <ul className="list-disc pl-[20px] text-base sm:text-lg md:text-xl">
            <li>Professional Working Attitude</li>
            <li>Pantang Menyerah</li>
            <li>Penguasaan kompetensi</li>
          </ul>
        </Section>
      </main>

      {/* BUFFER untuk tombol chat */}
      <div className="pb-24 sm:pb-0"></div>
    </div>
  );
}
