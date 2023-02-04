import { TitleProps } from "../../../types/GlobalTypes"
import styles from "../products.module.css"

export default function Title(props: TitleProps): JSX.Element {
	return (
		<>
			{props.needMarginTop && <div className={styles.marginTop}></div>}
			<span className={styles.partTitle}>{props.pageTitle}</span>
		</>
	)
}
