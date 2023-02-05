import Header from "../../components/Header"
import style from "./enquiry.module.css"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
function EquiryPage(): JSX.Element {
    return (
        <>
            <Header />
            <Title pageTitle={"EQUIRIES"} />
            <div className={style.centerText}>
                <div className={style.centerTitle}>WE ARE LOOKING TO EXPAND</div>
                <div>Watch out this space regularly for updates.</div>
            </div>
            <Footer />

        </>
    )
}

export default EquiryPage
