import styles from "../process.module.css"

export default function Paragraph(): JSX.Element {
    return (
        <>
            <div className={styles.paraContainer}>
                <div className={styles.paraTitle}></div>
                <div className={styles.paraContent}></div>
            </div>
        </>
    )
}