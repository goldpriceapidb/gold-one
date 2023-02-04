import styles from "./title.module.css"

interface TitleProps {
    pageTitle: string
}

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