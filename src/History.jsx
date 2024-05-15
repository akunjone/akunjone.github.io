import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./History.css";

const historyData = [
  {
    title: {
      en: "Kingdom Period",
      id: "Masa Kerajaan"
    },
    image: "https://lh3.googleusercontent.com/d/1EF0Tp9CI-0OMY-h3Q-RSuQildHgfoyTD",
    description: {
      en: "Central Java, a province on the island of Java, has a long and complex history, encompassing various periods of kingdoms. One of the oldest kingdoms in this region is the Kalingga Kingdom, which stood in the 7th century AD. This kingdom, centered in the north of Mount Muria in Jepara Regency, was the first Hindu-Buddhist kingdom in Central Java. During the reign of Queen Shima, the Kalingga Kingdom reached its peak, as recorded in relics such as the Tuk Mas Inscription and the Sojomerto Inscription, as well as the Wind Temple and the Bubrah Temple. In the mid-8th century, the Ancient Mataram Kingdom stood in Central Java. This kingdom, divided into three major dynasties namely Sanjaya, Syailendra, and Isyana, left evidence of relics in the form of various Hindu temples such as the Dieng Temple complex and the Prambanan Temple, and Buddhist Temples such as the Mendut Temple and the Borobudur Temple. After the fall of the Majapahit Kingdom in the 16th century, the first Islamic kingdom in Java, namely the Demak Kingdom, emerged. After the fall of the Demak Kingdom, the Pajang Kingdom stood, which was then replaced by the Islamic Mataram Kingdom around the 16th century AD.",
      id: "Jawa Tengah, sebuah provinsi di Pulau Jawa, memiliki sejarah yang panjang dan kompleks, yang mencakup berbagai periode kerajaan. Salah satu kerajaan tertua di wilayah ini adalah Kerajaan Kalingga, yang berdiri pada abad ke-7 Masehi. Kerajaan ini, yang berpusat di utara Gunung Muria di Kabupaten Jepara, adalah kerajaan Hindu-Buddha pertama di Jawa Tengah. Pada masa pemerintahan Ratu Shima, Kerajaan Kalingga mencapai puncak kejayaannya, seperti yang tercatat dalam peninggalan-peninggalan seperti Prasasti Tuk Mas dan Prasasti Sojomerto, serta Candi Angin dan Candi Bubrah. Pada pertengahan abad ke-8, Kerajaan Mataram Kuno berdiri di Jawa Tengah. Kerajaan ini, yang terbagi menjadi tiga dinasti besar yaitu Sanjaya, Syailendra, dan Isyana, meninggalkan bukti peninggalan berupa berbagai macam candi Hindu seperti kompleks Candi Dieng dan Candi Prambanan, dan Candi Buddha seperti Candi Mendut dan Candi Borobudur. Setelah runtuhnya Kerajaan Majapahit di abad ke-16, kerajaan Islam pertama di Jawa, yaitu Kerajaan Demak, muncul. Setelah runtuhnya Kerajaan Demak, Kerajaan Pajang berdiri, yang kemudian digantikan oleh Kerajaan Mataram Islam pada sekitar abad ke-16 M."
    }
  },
  {
    title: {
      en: "Colonization Period",
      id: "Masa Kolonisasi"
    },
    image: "https://lh3.googleusercontent.com/d/1iabBrN5mOc70Zna8pLtpwdzKX4p_bHex",
    description: {
      en: "Colonization in Central Java began after the “private” governance of the East India Trading Company (Vereenigde Oost-Indische Compagnie, VOC) over the Nusantara region was transferred to the hands of the Dutch Kingdom Government on December 31, 1799. During the colonial period, various resistances against colonialism and imperialism occurred in Central Java, including resistance before 1600, 1600 - 1800, Diponegoro resistance, to social movements affected by the influence of the Islamic Association movement in the Central Java Region. One of the famous resistances is the Diponegoro War in Central Java (Yogyakarta) in 1825-1830. This war is a form of resistance against Dutch colonialism and is an important part of the history of the Indonesian nation's struggle. During the colonial period, there was also the development of religions in Central Java. Catholic, Protestant Christian, and Islamic religions developed in various regions in Central Java during the colonial period. During the colonial period, the Dutch implemented a forced planting system or Cultuur Stelsel. This system had a significant impact on the community, including rural economic changes. As a result, the people became a source of exploitation from two colonial and traditional systems.",
      id: "Kolonialisasi di Jawa Tengah dimulai setelah pemerintahan “swasta” Perusahaan Dagang Hindia Timur (Vereenigde Oost-Indische Compagnie, VOC) atas wilayah Nusantara beralih ke tangan Pemerintah Kerajaan Belanda pada 31 Desember 1799. Selama masa kolonial, terjadi berbagai perlawanan terhadap kolonialisme dan imperialisme di Jawa Tengah, termasuk perlawanan sebelum tahun 1600, tahun 1600 - 1800, perlawanan Diponegoro, hingga gerakan-gerakan sosial yang terkena pengaruh gerakan Sarekat Islam di Daerah Jawa Tengah. Salah satu perlawanan terkenal adalah Perang Diponegoro di Jawa Tengah (Yogyakarta) pada tahun 1825-1830. Perang ini merupakan bentuk perlawanan terhadap penjajahan Belanda dan menjadi bagian penting dari sejarah perjuangan bangsa Indonesia. Selama masa kolonial, terjadi juga perkembangan agama-agama di Jawa Tengah. Agama Katolik, Kristen Protestan, dan Islam berkembang di berbagai daerah di Jawa Tengah pada masa kolonial. Pada masa kolonial, Belanda menerapkan sistem tanam paksa atau Cultuur Stelsel. Sistem ini memberikan dampak yang signifikan bagi masyarakat, termasuk perubahan ekonomi pedesaan. Akibatnya, rakyat menjadi sumber eksploitasi dari dua sistem kolonial dan tradisional."
    }
  },
  {
    title: {
      en: "Independence Period",
      id: "Masa Kemerdekaan"
    },
    image: "https://lh3.googleusercontent.com/d/1oLbaW2k3X8l4hdGJJqwUlB_dZku1LepK",
    description: {
      en: "Central Java during the independence period began after the Proclamation of Indonesian Independence on 17 August 1945. At the beginning of independence, Central Java was still included in the Java Province. However, in 1950, administrative division was carried out by the Government of Indonesia and Central Java officially became a province with the legal basis of Law No. 10 of 1950. The history of the formation of Central Java Province begins with the inauguration of Raden Panji Suroso Condronegoro as the first governor of Central Java, on 19 August 1945. According to Law No. 11 of 2023, the anniversary of Central Java Province is based on 19 August 1945 which is the date of the establishment of Central Java Province based on the Decree of the Preparatory Committee for Indonesian Independence dated 19 August 1945 which divided Indonesia into 8 (eight) Provinces, including Central Java Province and appointed Raden Pandji Soeroso as the first Governor of Central Java. The history of Central Java during the independence period also includes many important and unique events. For example, although based on Regional Regulation (Perda) No. 7/2004, the birthday of Central Java Province is 15 August 1950, but based on historical research, the birthday of Central Java coincides with the birthdays of West Java (Jabar) and East Java (Jatim) Provinces, namely in 1945. Therefore, the Central Java Provincial Government agreed that the birthday of Central Java coincides with 19 August 1945.",
      id: "Jawa Tengah pada masa kemerdekaan dimulai setelah Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945. Pada awal kemerdekaan, Jawa Tengah masih termasuk ke dalam wilayah Provinsi Jawa. Namun, pada tahun 1950, pemekaran wilayah administratif dilakukan oleh Pemerintah Indonesia dan Jawa Tengah resmi menjadi Provinsi dengan dasar hukum UU No. 10 Tahun 1950. Sejarah pembentukan Provinsi Jawa Tengah dimulai dari pelantikan Raden Panji Suroso Condronegoro sebagai gubernur pertama Jawa Tengah, pada 19 Agustus 1945. Menurut Undang-Undang Nomor 11 Tahun 2023, Hari jadi Provinsi Jawa Tengah didasarkan pada tanggal 19 Agustus 1945 yang merupakan tanggal berdirinya Provinsi Jawa Tengah dengan mendasarkan kepada Ketetapan Panitia Persiapan Kemerdekaan Indonesia tanggal 19 Agustus 1945 yang membagi Indonesia menjadi 8 (delapan) Provinsi, termasuk di dalamnya adalah Provinsi Jawa Tengah serta menunjuk Raden Pandji Soeroso menjadi Gubernur Jawa Tengah pertama. Sejarah JawFa Tengah pada masa kemerdekaan juga mencakup berbagai peristiwa penting dan unik. Misalnya, meskipun berdasarkan Peraturan Daerah (Perda) Nomor 7 Tahun 2004 hari lahir Provinsi Jateng adalah 15 Agustus 1950, namun berdasarkan penelusuran sejarah, hari lahir Jateng bersamaan dengan hari lahir Provinsi Jawa Barat (Jabar) dan Jawa Timur (Jatim), yaitu pada 1945. Oleh karena itu, Pemprov Jateng sepakat bahwa hari lahir Jateng bertepatan dengan tanggal 19 Agustus 1945."
    }
  }
];

function History({ language, onLanguageChange }) {
  return (
    <div className="mt-3">
      <h2><strong>{language === "id" ? "Sejarah" : "History"}</strong></h2>
      <Accordion>
        {historyData.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{item.title[language]}</Accordion.Header>
            <Accordion.Body>
              <img src={item.image} alt={item.title[language]} style={{ display: 'block', width: '100%', height: 'auto', margin: 'auto' }} />
              <p>{item.description[language]}</p>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default History;
