import styles from "../contact.module.css"

export default function ContactUs(): JSX.Element {
    return (
        <div className={styles.wholeContactDetails}>
            <div className={styles.contactFlex}>
                <div className={styles.twoRowDivs}>
                    <div className={styles.iconFlexDiv}>
                        <img src="/icons/email.png" className={styles.icon} alt="Email" />
                        <a className={styles.links} href="mailto:refinery@goldone.in">refinery@goldone.in</a>
                    </div>
                    <div className={styles.iconFlexDiv}>
                        <img src="/icons/web.png" className={styles.icon} alt="Website" />
                        <a href="www.goldone.in" className={styles.links} >www.goldone.in</a>
                    </div>
                </div>
                <img src="/icons/phone.png" alt="Phone" className={styles.phoneIcon}></img>
                <div className={styles.twoRowDivs}>
                    <div>Contact No:</div>
                    <a href="tel:4448644137" className={styles.phoneNo}>+91 44 4864 4137</a>
                </div>
            </div>
            <div className={styles.addressDiv}>
                <div>Address : A13 Thiru vi ka lndustrial estate Guindy,</div>
                <div>Chennai - 600032</div>
            </div>
        </div>
    )
}