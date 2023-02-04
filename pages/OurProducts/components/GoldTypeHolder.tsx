import styles from "./products.module.css"

export default function GoldTypeHolder(): JSX.Element {
	return (
		<div className={styles.goldTypeHolder}>
			<GoldType goldType="995" />
			<GoldType goldType="999" />
		</div>
	)
}

interface GoldTypeProps {
	goldType: string
}

function GoldType(props: GoldTypeProps): JSX.Element {
	return (
		<div className={styles.goldTypeContainer}>
			<span className={styles.separatorHyphen}></span>
			<span className={styles.goldType}>{props.goldType}</span>
			<span className={styles.separatorHyphen}></span>
		</div>
	)
}
