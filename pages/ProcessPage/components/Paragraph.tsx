import styles from "../process.module.css"

export default function Paragraph(prop: any): JSX.Element {
    return (
        <>
            <div className={styles.paraContainer}>
                <div className={styles.paraTitle}>{prop.title}</div>
                <div className={styles.paraContent}>{prop.content}</div>
            </div>
        </>
    )
}