import styles from "../contact.module.css"

export default function ContactUs(prop: any): JSX.Element {
    return (
        <>
            <div className={styles.contactFlex}>
                <div className={styles.twoRowDivs}>
                    <div className={styles.iconFlexDiv}>
                        <img src="/icons/email.png" />
                        <a className={styles.links} href="mailto:refinary@goldone.in">refinary@goldone.in</a>
                    </div>
                    <div className={styles.iconFlexDiv}>
                        <img src="/icons/web.png" />
                        <a href="www.goldone.in" className={styles.links} >www.goldone.in</a>
                    </div>
                </div>
                <img src="/icons/phone.png" className={styles.phoneIcon}></img>
                <div className={styles.twoRowDivs}>
                    <div>Contact No:</div>
                    <a href="tel:4448644137" className={styles.phoneNo}>+91 44 4864 4137</a>
                </div>
            </div>
        </>
    )
}