import Header from "../../components/Header"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import styles from "./certification.module.css"
import ImageGrid from "./components/ImageGrid"
import { useState } from 'react';

function CertificationPage(): JSX.Element {
    const [popupVisible, setPopupVisible] = useState(false);
    const [activePopup, setActivePopup] = useState("");

    const data = [
        {
            key: 1,
            img: "/img/certificates/c1.png",
            zoom: "/img/certificates/zoomed/c1.jpg",
            caption: "Gold Dore"
        },
        {
            key: 2,
            img: "/img/certificates/c2.png",
            zoom: "/img/certificates/zoomed/c2.jpg",
            caption: "Silver Dore"
        },
        {
            key: 3,
            img: "/img/certificates/c3.png",
            zoom: "/img/certificates/zoomed/c3.png",
            caption: "NABL"
        },
        {
            key: 4,
            img: "/img/certificates/c4.png",
            zoom: "redirect",
            caption: "",
            url: "https://drive.google.com/drive/folders/11kLJKf20E3klHzTu2TXibmh-XJyLsNVp?usp=share_link"
        },
    ]
    return (
        <>
            <Header />
            <Title pageTitle={"CERTIFICATION"} />

            <div className={styles.imageGrid}>

                {
                    data.map((element) => (
                        <div onClick={() => {

                            if (element.zoom !== "redirect") {
                                setPopupVisible(true);
                                setActivePopup(element.zoom)
                            } else {
                                window.open(element.url, "_blank")
                            }
                        }}
                        >
                            <ImageGrid
                                key={element.key}
                                img={element.img}
                                caption={element.caption}
                            />
                        </div>
                    ))}

            </div>
            {popupVisible && (
                <div onClick={() => { setPopupVisible(false); setActivePopup("") }} className={styles.popup}>
                    <img src={activePopup} alt="..." />
                </div>
            )}
            <Footer />
        </>

    )
}

export default CertificationPage
