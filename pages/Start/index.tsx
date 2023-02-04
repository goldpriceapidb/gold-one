import Header from "../../components/Header"
import HeroSlider from "./components/HeroSlider"
import Quote from "./components/Quote"
import LiveSpotPrice from "./components/LiveSpotPrice"
import WhyChooseUs from "./components/WhyChoose"
import VideoComponent from "./components/VideoComponent"
import style from "./start.module.css"
function StartPage(): JSX.Element {
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
		</>
	)
}

export default StartPage
