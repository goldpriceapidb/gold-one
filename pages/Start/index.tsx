import Header from "../../components/Header"
import HeroSlider from "./components/HeroSlider"
import Quote from "./components/Quote"
import LiveSpotPrice from "./components/LiveSpotPrice"
import WhyChooseUs from "./components/WhyChoose"
import VideoComponent from "./components/VideoComponent"
import PageBreak from "../../components/PageBreak"
import Products from "../OurProducts"
import Footer from "../../components/Footer"

import style from "./start.module.css"
function StartPage(): JSX.Element {
	console.log("StartPage2")
	return (
		<>
			<Header />

			<HeroSlider />
			<Quote />
			<div className={style.gridChoosePrice}>
				<LiveSpotPrice />
				<WhyChooseUs />
			</div>
			<VideoComponent />
			<PageBreak />


			<Products />
			<Footer />
		</>
	)
}

export default StartPage
