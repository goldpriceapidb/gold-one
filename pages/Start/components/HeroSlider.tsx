import styles from "../start.module.css"

export default function HeroSlider(): JSX.Element {
    return (
        <>
            <div className="heroSlider">
				<img
					className={styles.heroSlider}
					src="/hero/mainSlider.webp"
					alt="Made with attention to every detail & carefully finished by hand."
					width={1024}
				/>
			</div>
        </>
    )
}