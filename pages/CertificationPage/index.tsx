import Header from "../../components/Header"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import styles from "./certification.module.css"
import ImageGrid from "./components/ImageGrid"
function CertificationPage(): JSX.Element {

    const data = [
        {
            key: 1,
            img: "/img/certificates/c1.png",
            caption: "Gold Dore"
        },
        {
            key: 2,
            img: "/img/certificates/c2.png",
            caption: "Silver Dore"
        },
        {
            key: 3,
            img: "/img/certificates/c3.png",
            caption: "NABL"
        },
        {
            key: 4,
            img: "/img/certificates/c4.png",
            caption: ""
        },
    ]
    return (
        <>
            <Header />
            <Title pageTitle={"CERTIFICATION"} />

            <div className={styles.imageGrid}>

                {
                    data.map((element) => (
                        <ImageGrid
                            key={element.key}
                            img={element.img}
                            caption={element.caption}
                        />
                    ))}

            </div>

            <Footer />
        </>

    )
}

export default CertificationPage
