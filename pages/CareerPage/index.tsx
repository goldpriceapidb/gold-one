import Header from "../../components/Header"
import style from "./career.module.css"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
function CareerPage(): JSX.Element {
    return (
        <>
            <Header />
            <Title pageTitle={"CAREERS"} />
            <div className={style.centerText}>
                <div className={style.centerTitle}>WE ARE HIRING</div>
                <div>Watch out this space regularly for updates.</div>
            </div>
            <Footer />
        </>
    )
}

export default CareerPage
