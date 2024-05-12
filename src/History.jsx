import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./History.css";

const historyData = [
  {
    title: "Masa Kerajaan",
    image: "path/to/image.jpg",
    description:
      "Jawa Tengah, sebuah provinsi di Pulau Jawa, memiliki sejarah yang panjang dan kompleks, yang mencakup berbagai periode kerajaan. Salah satu kerajaan tertua di wilayah ini adalah Kerajaan Kalingga, yang berdiri pada abad ke-7 Masehi. Kerajaan ini, yang berpusat di utara Gunung Muria di Kabupaten Jepara, adalah kerajaan Hindu-Buddha pertama di Jawa Tengah. Pada masa pemerintahan Ratu Shima, Kerajaan Kalingga mencapai puncak kejayaannya, seperti yang tercatat dalam peninggalan-peninggalan seperti Prasasti Tuk Mas dan Prasasti Sojomerto, serta Candi Angin dan Candi Bubrah. Pada pertengahan abad ke-8, Kerajaan Mataram Kuno berdiri di Jawa Tengah. Kerajaan ini, yang terbagi menjadi tiga dinasti besar yaitu Sanjaya, Syailendra, dan Isyana, meninggalkan bukti peninggalan berupa berbagai macam candi Hindu seperti kompleks Candi Dieng dan Candi Prambanan, dan Candi Buddha seperti Candi Mendut dan Candi Borobudur. Setelah runtuhnya Kerajaan Majapahit di abad ke-16, kerajaan Islam pertama di Jawa, yaitu Kerajaan Demak, muncul. Setelah runtuhnya Kerajaan Demak, Kerajaan Pajang berdiri, yang kemudian digantikan oleh Kerajaan Mataram Islam pada sekitar abad ke-16 M.",
  },
  {
    title: "Masa Kolonisasi",
    image: "path/to/image.jpg",
    description:
      "kolonialisasi di Jawa Tengah dimulai setelah pemerintahan “swasta” Perusahaan Dagang Hindia Timur (Vereenigde Oost-Indische Compagnie, VOC) atas wilayah Nusantara beralih ke tangan Pemerintah Kerajaan Belanda pada 31 Desember 1799. Selama masa kolonial, terjadi berbagai perlawanan terhadap kolonialisme dan imperialisme di Jawa Tengah, termasuk perlawanan sebelum tahun 1600, tahun 1600 - 1800, perlawanan Diponegoro, hingga gerakan-gerakan sosial yang terkena pengaruh gerakan Sarekat Islam di Daerah Jawa Tengah. Salah satu perlawanan terkenal adalah Perang Diponegoro di Jawa Tengah (Yogyakarta) pada tahun 1825-1830. Perang ini merupakan bentuk perlawanan terhadap penjajahan Belanda dan menjadi bagian penting dari sejarah perjuangan bangsa Indonesia. Selama masa kolonial, terjadi juga perkembangan agama-agama di Jawa Tengah. Agama Katolik, Kristen Protestan, dan Islam berkembang di berbagai daerah di Jawa Tengah pada masa kolonial. Pada masa kolonial, Belanda menerapkan sistem tanam paksa atau Cultuur Stelsel. Sistem ini memberikan dampak yang signifikan bagi masyarakat, termasuk perubahan ekonomi pedesaan. Akibatnya, rakyat menjadi sumber eksploitasi dari dua sistem kolonial dan tradisional.",
  },
  {
    title: "Masa Kemerdekaan",
    image: "path/to/image.jpg",
    description:
      "Jawa Tengah pada masa kemerdekaan dimulai setelah Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945. Pada awal kemerdekaan, Jawa Tengah masih termasuk ke dalam wilayah Provinsi Jawa. Namun, pada tahun 1950, pemekaran wilayah administratif dilakukan oleh Pemerintah Indonesia dan Jawa Tengah resmi menjadi Provinsi dengan dasar hukum UU No. 10 Tahun 1950. Sejarah pembentukan Provinsi Jawa Tengah dimulai dari pelantikan Raden Panji Suroso Condronegoro sebagai gubernur pertama Jawa Tengah, pada 19 Agustus 1945. Menurut Undang-Undang Nomor 11 Tahun 2023, Hari jadi Provinsi Jawa Tengah didasarkan pada tanggal 19 Agustus 1945 yang merupakan tanggal berdirinya Provinsi Jawa Tengah dengan mendasarkan kepada Ketetapan Panitia Persiapan Kemerdekaan Indonesia tanggal 19 Agustus 1945 yang membagi Indonesia menjadi 8 (delapan) Provinsi, termasuk di dalamnya adalah Provinsi Jawa Tengah serta menunjuk Raden Pandji Soeroso menjadi Gubernur Jawa Tengah pertama. Sejarah Jawa Tengah pada masa kemerdekaan juga mencakup berbagai peristiwa penting dan unik. Misalnya, meskipun berdasarkan Peraturan Daerah (Perda) Nomor 7 Tahun 2004 hari lahir Provinsi Jateng adalah 15 Agustus 1950, namun berdasarkan penelusuran sejarah, hari lahir Jateng bersamaan dengan hari lahir Provinsi Jawa Barat (Jabar) dan Jawa Timur (Jatim), yaitu pada 1945. Oleh karena itu, Pemprov Jateng sepakat bahwa hari lahir Jateng bertepatan dengan tanggal 19 Agustus 1945.",
  },
];

function History() {
  return (
    <div className="history-container container-fluid">
      <h2><b>Sejarah</b></h2>
      <Accordion defaultActiveKey="0">
        {historyData.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
              <img src={item.image} alt={item.title} />
              <p>{item.description}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default History;
