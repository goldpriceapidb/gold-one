import Header from "../../components/Header"
import HeroSlider from "./components/HeroSlider"
import Quote from "./components/Quote"
import LiveSpotPrice from "./components/LiveSpotPrice"

function StartPage(): JSX.Element {
	return (
		<>
			<Header />

			<HeroSlider />
			<Quote />

			<LiveSpotPrice />
		</>
	)
}

export default StartPage

