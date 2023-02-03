import styles from "../certification.module.css"

export default function ImageGrid(prop: any): JSX.Element {
    return (
        <>
            <div>
                <img src={prop.img} className={styles.imageContainer} />
                <div className={styles.imageCaption}>{prop.caption}</div>
            </div>
        </>
    )
}