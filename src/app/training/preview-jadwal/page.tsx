"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function PreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pdfError, setPdfError] = useState(false);

  // Get title from URL parameters
  const trainingTitle = searchParams.get('title') || 'Jadwal Public Training 2027';

  const handleDownload = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/files/TOR MASIB 5 - Frontend Developer.pdf"; // Path ke file PDF dummy
    link.download = "TOR-MASIB-5-Frontend-Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBack = () => {
    router.back();
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setPdfError(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[140px] pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Actions */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-b-2 border-gray-200">
          <div>
            <h1 className="font-montserrat font-bold text-2xl md:text-3xl text-[#02353C]">
              {trainingTitle}
            </h1>
          </div>

          <div className="flex gap-3">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-montserrat font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali
            </button>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-[#70B946] hover:bg-[#5fa037] text-white font-montserrat font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
          <div className="relative w-full bg-gray-100" style={{ height: "80vh" }}>
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#70B946] mx-auto mb-4"></div>
                  <p className="font-montserrat text-gray-600">
                    Memuat preview...
                  </p>
                </div>
              </div>
            )}

            {/* PDF Embed */}
            <iframe
              src="/files/TOR MASIB 5 - Frontend Developer.pdf#toolbar=0&navpanes=0&scrollbar=1"
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title={`Preview ${trainingTitle}`}
            />

            {/* Fallback if PDF not available - Only show on error */}
            {pdfError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-sm">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md border-2 border-gray-200">
                  <svg
                    className="w-20 h-20 mx-auto text-[#70B946] mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="font-montserrat font-bold text-xl text-[#02353C] mb-2">
                    File PDF Tidak Tersedia
                  </h3>
                  <p className="text-gray-600 font-montserrat mb-6">
                    Browser Anda tidak mendukung preview PDF atau file belum tersedia.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="px-6 py-3 bg-[#70B946] hover:bg-[#5fa037] text-white font-montserrat font-semibold rounded-xl transition-all"
                  >
                    Download Langsung
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreviewJadwalPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 pt-[140px] pb-10 px-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#70B946] mx-auto mb-4"></div>
          <p className="font-montserrat text-gray-600">Memuat preview...</p>
        </div>
      </div>
    }>
      <PreviewContent />
    </Suspense>
  );
}
