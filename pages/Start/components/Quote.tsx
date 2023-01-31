import styles from "../start.module.css"
import { quote } from "../data"

export default function Quote(): JSX.Element {
	return (
		<>
			<div className={styles.quoteContainer}>
				<span className={styles.quoteSpan}>{quote.verse}</span>
				<span className={styles.quoteSpan}>
					{"- "}
					{quote.saidBy}
				</span>
			</div>
		</>
	)
}
