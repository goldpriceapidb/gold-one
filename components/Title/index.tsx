import styles from "./title.module.css"
import { TitleProps } from "../../types/GlobalTypes"

export default function Title(prop: TitleProps): JSX.Element {
    return (
        <>
            <div className={styles.titleContainer}>
                <div className={styles.titleText}>
                    {prop.pageTitle}
                </div>
                <div className={styles.seperator} />
            </div>
        </>
    )
}