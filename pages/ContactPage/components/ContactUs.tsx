import styles from "../contact.module.css"

export default function ContactUs(prop: any): JSX.Element {
    return (
        <>
            <div className={styles.contactFlex}>
                <div className={styles.twoRowDivs}>
                    <div className={styles.iconFlexDiv}>
                        <img src="/icons/email.png" />
                        <div>refinary@goldone.in</div>
                    </div>
                    <div className={styles.iconFlexDiv}>
                        <img src="/icons/web.png" />
                        <div>www.goldone.in</div>
                    </div>
                </div>
                <img src="/icons/phone.png" className={styles.phoneIcon}></img>
                <div className={styles.twoRowDivs}>
                    <div>Contact No:</div>
                    <div className={styles.phoneNo}>+91 44 4864 4137</div>
                </div>
            </div>
        </>
    )
}