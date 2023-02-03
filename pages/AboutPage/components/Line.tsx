import styles from "../about.module.css"

export default function Line(prop: any): JSX.Element {
    return (
        <>
            <div className={styles.line}>
                {prop.line}
            </div>
        </>
    )
}