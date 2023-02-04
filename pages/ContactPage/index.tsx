import Header from "../../components/Header"
import style from "./contact.module.css"
import ContactUs from "./components/ContactUs"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
function ContactPage(): JSX.Element {
    return (
        <>
            <Header />
            <Title pageTitle={"CONTACT US"} />
            <ContactUs />
            <Footer />
        </>
    )
}

export default ContactPage
