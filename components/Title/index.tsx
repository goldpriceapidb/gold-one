import styles from "./title.module.css"

export default function Title(prop: any): JSX.Element {
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