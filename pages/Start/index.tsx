import Header from "../../components/Header"
import HeroSlider from "./components/HeroSlider"
import Quote from "./components/Quote"

function StartPage(): JSX.Element {
	return (
		<>
			<Header />

			<HeroSlider />
			<Quote />

			<div className={styles.quoteContainer}>
				<span className={styles.quoteSpan}>{quote.verse}</span>
				<span className={styles.quoteSpan}>{"- "}{quote.saidBy}</span>
			</div>
		</>
	)
}

export default StartPage

