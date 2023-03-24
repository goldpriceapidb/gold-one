import { GoldBar } from "../../../types/GlobalTypes"
import { goldBarData } from "../data"
import styles from "../products.module.css"

export default function GoldBarsContainer(): JSX.Element {
	return (
		<div className={styles.barsContainer}>
			{/* {goldBarData.map((goldBar: GoldBar) => {
				return (
					<GoldBar
						key={goldBar.key}
						goldType={goldBar.goldType}
						value={goldBar.value}
						unit={goldBar.unit}
						barNumber={goldBar.barNumber}
					/>
				)
			})} */}
			<img className={styles.barsImage} src="/img/bar-type.png"></img>

		</div>
	)
}

function GoldBar({ goldType, value, unit, barNumber }: GoldBar): JSX.Element {
	return (
		<>
			<div className={styles.goldBar}>
				<div className={styles.logoContainer}>
					<img
						src="/header/GO.webp"
						alt="Gold One"
						height={120}
						width={120}
					/>
				</div>
				<div className={styles.gramsContainer}>
					<span className={styles.value}>{value}</span>
					<span className={styles.unit}>{unit}</span>
				</div>
				<span className={styles.goldTypeSmall}>{goldType}</span>
				<span className={styles.barNumber}>{barNumber}</span>
			</div>
			<div className={styles.separator}></div>
		</>
	)
}
