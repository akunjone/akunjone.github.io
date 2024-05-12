import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./folk.css";

const folkloreData = [
  {
    title: "Timun Mas",
    description: [
      "Di sebuah desa, hiduplah sepasang suami istri petani yang sudah lama menikah namun belum dikaruniai anak. Mereka sangat berharap memiliki seorang anak. Suatu hari, mereka bertemu dengan seorang raksasa yang memberikan mereka sebuah biji timun emas. Raksasa tersebut berjanji bahwa biji tersebut akan tumbuh menjadi seorang anak, tetapi ada satu syarat: ketika anak tersebut berusia 17 tahun, mereka harus mengembalikannya kepada raksasa.",
      "Pasangan petani tersebut menanam biji timun emas itu di kebun mereka. Tak lama kemudian, tumbuhlah sebuah timun yang sangat besar. Ketika mereka memotong timun tersebut, mereka menemukan seorang bayi perempuan yang sangat cantik di dalamnya. Mereka sangat bahagia dan menamainya Timun Mas.",
      "Timun Mas tumbuh menjadi seorang gadis yang cantik dan baik hati. Namun, ketika dia berusia 17 tahun, raksasa datang untuk menjemputnya sesuai dengan janji mereka. Timun Mas dan orang tuanya sangat takut dan tidak ingin dia dibawa pergi.",
      "Ketika raksasa mengejar Timun Mas, dia melemparkan garam yang berubah menjadi laut. Raksasa tetap mengejarnya, lalu dia melemparkan biji terung yang berubah menjadi hutan belantara. Raksasa masih mengejarnya, dan dia melemparkan jarum yang berubah menjadi pegunungan tajam. Akhirnya, dia melemparkan terasi yang berubah menjadi lautan terasi. Raksasa tidak tahan dengan bau terasi dan akhirnya mati.",
      "Dengan demikian, Timun Mas dan orang tuanya dapat hidup dengan bahagia dan damai. Cerita ini mengajarkan kita tentang keberanian dan kecerdasan dalam menghadapi masalah. Cerita ini juga mengingatkan kita bahwa kebaikan dan kecerdasan dapat mengalahkan kejahatan, meskipun kejahatan tersebut tampak sangat kuat dan menakutkan.",
    ],
    image:
      "https://c.files.bbci.co.uk/12755/production/_104250657_9b1f94de-edcb-4c28-91be-e0ebf289733d.jpg",
  },
  {
    title: "Ratu Kidul",
    description: [
      "Legenda Ratu Kidul adalah salah satu cerita yang penuh misteri dan kekuatan spiritual di Jawa Tengah.",
      "Mengisahkan tentang penguasa samudra di selatan Jawa yang dipercaya memiliki kekuatan magis.",
      "Diceritakan bahwa Ratu Kidul sering kali muncul dalam bentuk sosok cantik berpakaian hijau laut, dan dia memiliki pengaruh besar terhadap kehidupan pesisir pantai. Masyarakat percaya bahwa bertemu langsung dengan Ratu Kidul bisa berbahaya, karena bisa membuat seseorang terjebak dalam pesona dunianya dan tidak pernah bisa kembali.",
      "Meskipun demikian, kepercayaan dan cerita tentang Ratu Kidul tetap menjadi bagian penting dari kehidupan masyarakat pesisir di Jawa Tengah, menjadi cerminan dari hubungan yang erat antara manusia dan alam.",
    ],
    image:
      "https://lh3.googleusercontent.com/d/1ewOdcNKirdKKf7zvBSnOJjltx69yr3f6",
  }
];

function Folk() {
  return (
    <div className="folk-container">
      <h2><strong>Folklores</strong></h2>
      <Accordion defaultActiveKey="0">
        {folkloreData.map((folklore, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="folk-item"
          >
            <Accordion.Header className="folk-header">
              {folklore.title}
            </Accordion.Header>
            <Accordion.Body className="folk-body">
              <img
                src={folklore.image}
                alt={folklore.title}
                className="folk-image"
              />
              {folklore.description.map((paragraph, i) => (
                <p key={i} className="folk-description">
                  {paragraph}
                </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
export default Folk;
