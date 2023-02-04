import { TitleProps } from "../../../types/GlobalTypes"
import styles from "../products.module.css"

export default function Title(props: TitleProps): JSX.Element {
	return <span className={styles.partTitle}>{props.pageTitle}</span>
}
