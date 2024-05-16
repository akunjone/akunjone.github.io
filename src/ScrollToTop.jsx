import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./styles.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mendapatkan tinggi total dokumen
      const totalHeight = document.documentElement.scrollHeight;
      // Mendapatkan tinggi jendela browser
      const windowHeight = window.innerHeight;
      // Mendapatkan posisi scroll vertikal saat ini
      const scrollY = window.scrollY || window.pageYOffset;
      // Menentukan tinggi buffer
      const bufferHeight = 100; // Ubah sesuai kebutuhan, ini menambahkan buffer sebesar 100 pixel

      // Jika posisi scroll vertikal saat ini ditambah tinggi jendela browser dikurangi buffer, lebih besar dari atau sama dengan tinggi total dokumen,
      // maka pengguna berada di atas sedikit lebih tinggi dari halaman paling bawah
      setIsVisible(scrollY + windowHeight >= totalHeight - bufferHeight);
    };

    // Memanggil fungsi toggleVisibility saat pengguna melakukan scroll
    window.addEventListener("scroll", toggleVisibility);

    // Membersihkan event listener saat komponen di-unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-button">
          <FaArrowUp size={24} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
