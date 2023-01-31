import Header from "../../components/Header"
import HeroSlider from "./components/HeroSlider"

function StartPage(): JSX.Element {
	return (
		<>
			<Header />

			<HeroSlider />

			<div className={styles.quoteContainer}>
				<span className={styles.quoteSpan}>{quote.verse}</span>
				<span className={styles.quoteSpan}>{"- "}{quote.saidBy}</span>
			</div>
		</>
	)
}

export default StartPage

