import styles from "./title.module.css"
import animation from "../animation.module.css"

import { TitleProps } from "../../types/GlobalTypes"

export default function Title(prop: TitleProps): JSX.Element {
	let style = `${styles.titleContainer} ${animation.animate__animated} ${animation.animate__fadeInUp}`

	return (
		<>
			<div className={style}>
				<div className={styles.titleText}>{prop.pageTitle}</div>
				<div className={styles.seperator} />
			</div>
		</>
	)
}
