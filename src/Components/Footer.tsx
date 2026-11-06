"use client";

export default function Footer() {
  return (
    <footer className="bg-[#083B3D] text-white font-poppins pt-10 pb-6">
      {/* ===== Logo Tetap ===== */}
      <div className="flex justify-center mb-10">
        <img
          src="/images/logos/M-Knows.png"
          alt="M-Knows Consulting Logo"
          className="w-[200px] h-auto"
        />
      </div>

      {/* ===== GRID UTAMA ===== */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* ===================== KOLOM 1 - CONTACT US ===================== */}
        <div className="order-1 md:order-1 md:ml-auto md:pl-8">
          <h4 className="text-white font-semibold font-montserrat mb-4 text-[20px] text-center md:text-left">
            Contact Us
          </h4>

          {/* ===== Phone 1 ===== */}
          <div className="flex items-center justify-center md:justify-start mb-2">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-[#70B946]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              <span className="text-[#989898] font-medium font-montserrat">
                Telp: 021-388-900-52
              </span>
            </div>
          </div>

          {/* ===== WhatsApp ===== */}
          <div className="flex items-center justify-center md:justify-start mb-2">
            <a
              href="https://wa.me/6281210468281"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-80 transition"
            >
              <img
                src="/images/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
              />
              <span className="text-[#989898] font-medium font-montserrat">
                0812-1046-8281
              </span>
            </a>
          </div>

          {/* ===== Gmail ===== */}
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="mailto:learning@m-knowsconsulting.com"
              className="flex items-center hover:opacity-80 transition"
            >
              <img
                src="/images/icons/gmail.png"
                alt="Email"
                className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
              />
              <span className="text-[#989898] font-medium font-montserrat">
                learning@m-knowsconsulting.com
              </span>
            </a>
          </div>
        </div>

        {/* ===================== KOLOM 2 - PT. MENARA INDONESIA (TENGAH) ===================== */}
        <div className="order-2 md:order-2">
          <div className="flex items-center justify-center mb-2">
            <img
              src="/images/icons/maps.png"
              alt="location"
              className="w-6 h-6 mr-2 cursor-pointer hover:scale-110 transition"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/nxawd7wJpYgkptgcA",
                  "_blank"
                )
              }
            />
            <h4 className="text-white font-semibold font-montserrat text-[20px]">
              PT. Menara Indonesia
            </h4>
          </div>

          <p className="text-[#989898] font-medium font-montserrat leading-relaxed text-center mb-6">
            Jl. Raya Cirendeu No.61, Cireundeu,
            <br />
            Kec. Ciputat Tim., Kota Tangerang Selatan,
            <br />
            Banten 15419
          </p>

          {/* === Our Social Media === */}
          <div className="mt-6">
            <h4 className="font-semibold font-montserrat text-white mb-3 text-[20px] text-center">
              Our Social Media:
            </h4>
            <div className="flex justify-center space-x-0">
              <a
                href="https://www.linkedin.com/company/mknowsofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://youtube.com/@m-knowsofficial?si=ZLHDwT0lRPMp1e3q"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/youtube.png"
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/mknowsofficial?psln=MWhpdnNscWdpMDdoYw=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.tiktok.com/@mknowsofficial?_r=1&_t=ZS-9AvcxXfFVBq"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/tiktok.png"
                  alt="TikTok"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.facebook.com/mknowsconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="transition transform hover:scale-110"
              >
                <img
                  src="/images/icons/facebook.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ===================== KOLOM 3 - SURABAYA ===================== */}
        <div className="order-3 md:order-3">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img
              src="/images/icons/maps.png"
              alt="location"
              className="w-6 h-6 mr-2"
            />
            <h4 className="text-white font-semibold font-montserrat text-[20px]">
              Surabaya Branch Office
            </h4>
          </div>

          <div className="text-[#989898] font-montserrat font-medium leading-relaxed ml-8">
            <p>Jl. Darmo Permai III Surabaya</p>
          </div>

          {/* ===== Phone Surabaya ===== */}
          <div className="text-[#989898] font-montserrat font-medium leading-relaxed ">
            <div className="flex items-center justify-center md:justify-start mt-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-[#70B946]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                <span>Telp: 031-837-05277</span>
              </div>
            </div>

            {/* ===== Gmail ===== */}
            <div className="flex items-center justify-center md:justify-start mt-1">
              <a
                href="mailto:surabaya@m-knowsconsulting.com"
                className="flex items-center hover:opacity-80 transition"
              >
                <img
                  src="/images/icons/gmail.png"
                  alt="Email"
                  className="w-5 h-5 mr-2 cursor-pointer hover:scale-110 transition"
                />
                <span>surabaya@m-knowsconsulting.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
