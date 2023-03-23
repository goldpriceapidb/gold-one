import Header from "../../components/Header"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import styles from "./about.module.css"
import Line from "./components/Line"
function AboutPage(): JSX.Element {

    const data = [
        { key: 1, line: "GGold One Refinery Private Limited was incorporated in 2019 with the goal of providing pure gold bars to businesses and investors. We have a wide variety of sizes and weights to choose from, so you can find the perfect bar for your needs. Our goal is to provide our customers with the best benefits and the highest quality gold possible. We always price our products at the current market rate and follow all industry standards when refining our gold." },
        { key: 2, line: "Gold One Refinery Private Limited has earned a formal acknowledgement of laboratory proficiency from the NABL in accordance with international standards. This provides our customers and investors with the confidence that they're getting a top-quality product, increasing business on account of improved customer satisfaction. It also helps in saving both time and money as the re-testing of products is no longer necessary." },
        { key: 3, line: "Due to testing by authorized labs and our high-quality finish, Gold One is present as a seller in both domestic and international markets." },
    ]
    return (
        <>
            <Header />
            <Title pageTitle={"ABOUT US"} />
            <div className={styles.lineContainer}>
                {
                    data.map((element) => (
                        <Line
                            key={element.key}
                            line={element.line}
                        />
                    ))
                }
                <span className={styles.circularText}>
                    <img src="/header/circularText.svg" alt="Circular Text" height={120} width={120} />
                </span>
            </div>
            <Footer />
        </>

    )
}

export default AboutPage
