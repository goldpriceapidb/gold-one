import styles from "../start.module.css"
import { Icons } from "../../../types/StartPageTypes"
import { whyChooseUsIcons } from "../data"

export default function WhyChooseUs(): JSX.Element {
	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.headingTitle}>WHY CHOOSE US</span>

				<div className={styles.iconsContainer}>
					<IconDiv whyChooseUsIcons={whyChooseUsIcons} />
				</div>
			</div>

			<div className={styles.mobileWrapper}>
				<span className={styles.headingTitle}>WHY CHOOSE US</span>

				<div className={styles.iconsContainer}>
					<IconDiv whyChooseUsIcons={whyChooseUsIcons} />
				</div>
			</div>
		</>
	)
}

interface IconDivProps {
	whyChooseUsIcons: Icons[]
}

function IconDiv({ whyChooseUsIcons }: IconDivProps): JSX.Element {
	return (
		<>
			{whyChooseUsIcons.map((icon: Icons) => (
				<div className={styles.iconDiv} key={icon.key}>
					<img src={icon.iconSrc} alt={icon.text} />
					<span>{icon.text}</span>
				</div>
			))}
		</>
	)
}