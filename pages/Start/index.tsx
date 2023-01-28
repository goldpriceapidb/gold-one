import Header from "../../components/Header"
import styles from "./start.module.css"
import { quote } from "./data"

function StartPage(): JSX.Element {
	return (
		<>
			<Header />

			<div className="heroSlider">
				<img
					className={styles.heroSlider}
					src="/hero/mainSlider.webp"
					alt="Made with attention to every detail & carefully finished by hand."
					width={1024}
				/>
			</div>

			<div className={styles.quoteContainer}>
				<span className={styles.quoteSpan}>{quote.verse}</span>
				<span className={styles.quoteSpan}>{"- "}{quote.saidBy}</span>
			</div>
		</>
	)
}

export default StartPage

