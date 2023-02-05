import styles from "./footer.module.css"
export default function Footer(): JSX.Element {
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={styles.builtBy}>
                    <div>WEBSITE DESIGNED BY THIRDWORLDPOV</div>
                    <a className={styles.links} href="https://www.angris.in">WEBSITE BUILT BY ANGRIS</a>
                </div>
                <div className={styles.copyRight} >
                    <div>ALL RIGHTS RESERVED</div>
                    <div>GOLD ONE</div>
                    <div>2023</div>
                </div>
            </div>
        </>
    )
}

