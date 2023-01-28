import styles from "./header.module.css"
import { NavHeadingContent } from "../../types/NavHeadingType"
import { headerContents } from "./data"

function Header(): JSX.Element {
	return (
		<>
			<div className={styles.headerWrapper}>
				<GOLogo />
				<Headings />
				<CircularText />
			</div>
		</>
	)
}

export default Header

function NavHeading(props: NavHeadingContent): JSX.Element {
	return (
		<>
			<div className={styles.navHeading}>
				<span>{props.label}</span>
				<span className={styles.hyphens}>&emsp;&emsp;&emsp;&emsp;</span>
			</div>
		</>
	)
}

function Headings(): JSX.Element {
	return (
		<>
			{headerContents.map((element: NavHeadingContent) => (
				<NavHeading
					key={element.key}
					label={element.label}
					route={element.route}
				/>
			))}
		</>
	)
}

function CircularText(): JSX.Element {
	return (
		<img
			className={styles.circularText}
			src="/header/circularText.svg"
			alt="Gold One Refinery Private Limited"
			height={80}
			width={80}
		/>
	)
}

function GOLogo(): JSX.Element {
	return (
		<div className={styles.logoContainer}>
			<div className={styles.imageContainer}>
				<img
					src="/header/GO.webp"
					alt="Gold One Logo"
					height={200}
					width={200}
				/>
			</div>
		</div>
	)
}
