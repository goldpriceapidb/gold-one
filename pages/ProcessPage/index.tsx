import Header from "../../components/Header"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import Paragraph from "./components/Paragraph"
import { paragraphContentCol1, paragraphContentCol2 } from "./data"
import styles from "./process.module.css"
function ProcessPage(): JSX.Element {
    return (
        <>
            <Header />
            <Title pageTitle={"OUR PROCESS"} />
            <div className={styles.paraGrid}>
                <div>
                    {paragraphContentCol1.map((element) => (
                        <Paragraph
                            key={element.key}
                            title={element.title}
                            content={element.content}
                        />
                    ))}
                </div>
                <div>
                    {paragraphContentCol2.map((element) => (
                        <Paragraph
                            key={element.key}
                            title={element.title}
                            content={element.content}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.mobileParaGrid}>
                {paragraphContentCol1.map((element) => (
                    <Paragraph
                        key={element.key}
                        title={element.title}
                        content={element.content}
                    />
                ))}
                {paragraphContentCol2.map((element) => (
                    <Paragraph
                        key={element.key}
                        title={element.title}
                        content={element.content}
                    />
                ))}
            </div>
            <Footer />
        </>

    )
}

export default ProcessPage
