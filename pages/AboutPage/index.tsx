import Header from "../../components/Header"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import styles from "./about.module.css"
import Line from "./components/Line"
function AboutPage(): JSX.Element {

    const data = [
        { key: 1, line: "Gold One Refinery Private Limited has received a formal recognition of competence of a laboratory by the NABL in accordance with international criteria. This comes with an array of benefits for the brand." },
        { key: 2, line: "Firstly, it leads to a potential increase in business due to enhanced customer confidence and satisfaction. It also helps you save in terms of time and money." },
        { key: 3, line: "Lastly, the company will enjoy greater access for their products, in both domestic and international markets when tested by accredited laboratories." },
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
            </div>
            <Footer />
        </>

    )
}

export default AboutPage
