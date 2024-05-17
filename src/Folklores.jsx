import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./folk.css";

const folkloreData = [
  {
    title: "Timun Mas",
    descriptionID: [
      "Di sebuah desa, hiduplah sepasang suami istri petani yang sudah lama menikah namun belum dikaruniai anak. Mereka sangat berharap memiliki seorang anak. Suatu hari, mereka bertemu dengan seorang raksasa yang memberikan mereka sebuah biji timun emas. Raksasa tersebut berjanji bahwa biji tersebut akan tumbuh menjadi seorang anak, tetapi ada satu syarat: ketika anak tersebut berusia 17 tahun, mereka harus mengembalikannya kepada raksasa.",
      "Pasangan petani tersebut menanam biji timun emas itu di kebun mereka. Tak lama kemudian, tumbuhlah sebuah timun yang sangat besar. Ketika mereka memotong timun tersebut, mereka menemukan seorang bayi perempuan yang sangat cantik di dalamnya. Mereka sangat bahagia dan menamainya Timun Mas.",
      "Timun Mas tumbuh menjadi seorang gadis yang cantik dan baik hati. Namun, ketika dia berusia 17 tahun, raksasa datang untuk menjemputnya sesuai dengan janji mereka. Timun Mas dan orang tuanya sangat takut dan tidak ingin dia dibawa pergi.",
      "Ketika raksasa mengejar Timun Mas, dan dia melemparkan garam yang berubah menjadi laut. Raksasa tetap mengejarnya, lalu dia melemparkan biji terung yang berubah menjadi hutan belantara. Raksasa masih mengejarnya, dan dia melemparkan jarum yang berubah menjadi pegunungan tajam. Akhirnya, dia melemparkan terasi yang berubah menjadi lautan terasi. Raksasa tidak tahan dengan bau terasi dan akhirnya mati.",
      "Dengan demikian, Timun Mas dan orang tuanya dapat hidup dengan bahagia dan damai. Cerita ini mengajarkan kita tentang keberanian dan kecerdasan dalam menghadapi masalah. Cerita ini juga mengingatkan kita bahwa kebaikan dan kecerdasan dapat mengalahkan kejahatan, meskipun kejahatan tersebut tampak sangat kuat dan menakutkan.",
    ],
    descriptionEN: [
      "In a village, there lived a couple of farmers who had been married for a long time but had not been blessed with children. They were very hopeful of having a child. One day, they encountered a giant who gave them a golden cucumber seed. The giant promised that the seed would grow into a child, but there was one condition: when the child turned 17 years old, they had to return it to the giant.",
      "The farmer couple planted the golden cucumber seed in their garden. Before long, a very large cucumber grew. When they cut open the cucumber, they found a very beautiful baby girl inside. They were very happy and named her Timun Mas (Golden Cucumber).",
      "Timun Mas grew into a beautiful and kind-hearted girl. However, when she turned 17 years old, the giant came to take her away as per their agreement. Timun Mas and her parents were very scared and did not want her to go.",
      "As the giant chased Timun Mas, she threw salt which turned into the sea. The giant continued to chase her, and she threw eggplant seeds which turned into a dense forest. The giant still pursued her, and she threw needles which turned into sharp mountains. Finally, she threw shrimp paste which turned into a sea of shrimp paste. The giant could not stand the smell of the shrimp paste and eventually died.",
      "Thus, Timun Mas and her parents could live happily and peacefully. This story teaches us about courage and intelligence in facing problems. It also reminds us that goodness and intelligence can overcome evil, even though evil may seem very strong and frightening."
    ],
    image:
      "https://c.files.bbci.co.uk/12755/production/_104250657_9b1f94de-edcb-4c28-91be-e0ebf289733d.jpg",
  },
  {
    title: "Ratu Kidul",
    descriptionID: [
      "Legenda Ratu Kidul adalah salah satu cerita yang penuh misteri dan kekuatan spiritual di Jawa Tengah.",
      "Mengisahkan tentang penguasa samudra di selatan Jawa yang dipercaya memiliki kekuatan magis.",
      "Diceritakan bahwa Ratu Kidul sering kali muncul dalam bentuk sosok cantik berpakaian hijau laut, dan dia memiliki pengaruh besar terhadap kehidupan pesisir pantai. Masyarakat percaya bahwa bertemu langsung dengan Ratu Kidul bisa berbahaya, karena bisa membuat seseorang terjebak dalam pesona dunianya dan tidak pernah bisa kembali.",
      "Meskipun demikian, kepercayaan dan cerita tentang Ratu Kidul tetap menjadi bagian penting dari kehidupan masyarakat pesisir di Jawa Tengah, menjadi cerminan dari hubungan yang erat antara manusia dan alam.",
    ],
    descriptionEN: [
      "The legend of Ratu Kidul is one of the mysterious and spiritually powerful tales in Central Java.",
      "It tells of the ocean ruler in the south of Java believed to possess magical powers.",
      "It is said that Ratu Kidul often appears as a beautiful figure dressed in sea-green attire, and she has a significant influence on coastal life. People believe that encountering Ratu Kidul directly can be dangerous, as it can ensnare someone in her worldly enchantment and never allow them to return.",
      "Nevertheless, the belief and stories about Ratu Kidul remain an important part of coastal community life in Central Java, reflecting the close relationship between humans and nature.",
    ],
    image:
      "https://lh3.googleusercontent.com/d/1ewOdcNKirdKKf7zvBSnOJjltx69yr3f6",
  }
];

function Folk({language, onLanguageChange}) {
  return (
    <div className="folk-container mt-4" style={{width:"70%"}}>
      <h2><strong>{language === "id" ? "Cerita Rakyat" : "Folklores"}</strong></h2>
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
              {language === "id"
                ? folklore.descriptionID.map((paragraph, i) => (
                    <p key={i} className="folk-description">
                      {paragraph}
                    </p>
                  ))
                : folklore.descriptionEN.map((paragraph, i) => (
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
