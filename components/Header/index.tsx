import styles from "./header.module.css"
import { NavHeadingContent } from "../../types/NavHeadingType"
import { headerContents } from "./data"
import Link from "next/link"
import { useRouter } from 'next/router';

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
			{props.needToScroll ? (
				<ScrollToHeading
					{...props}
				/>
			) : (
				<LinkToHeading
					{...props}
				/>
			)}
		</>
	)
}

function LinkToHeading(props: NavHeadingContent): JSX.Element {
	// const router = useRouter();
	// let path = `${router.asPath}`;
	// if (path == "/#our-products") {
	// 	return (
	// 		<Link href={props.route + ""} className={styles.navHeading}>
	// 			<span>{props.label}</span>
	// 			<span className={styles.hyphens}>&emsp;&emsp;&emsp;&emsp;</span>
	// 		</Link>
	// 	)
	// }
	// className={path == props.route ? styles.activeNavHeader : ''}
	// console.log(path + " " + props.route);

	return (
		<Link href={props.route + ""} className={styles.navHeading}>
			<span>{props.label}</span>
			<span className={styles.hyphens}>&emsp;&emsp;&emsp;&emsp;</span>
		</Link>
	)
}

function ScrollToHeading(props: NavHeadingContent): JSX.Element {
	// const router = useRouter();
	// const path = `${router.asPath}`;
	// if (path != "/#our-products") {
	// 	return (
	// 		<a href={props.route} className={styles.navHeading} >
	// 			<span >{props.label}</span>
	// 			<span className={styles.hyphens}>&emsp;&emsp;&emsp;&emsp;</span>
	// 		</a>
	// 	)
	// }
	return (

		<a href={props.route} className={styles.navHeading} >
			<span>{props.label}</span>
			<span className={styles.hyphens}>&emsp;&emsp;&emsp;&emsp;</span>
		</a>
	)
}

function Headings(): JSX.Element {
	return (
		<div className={styles.navRowStyle}>
			{headerContents.map((element: NavHeadingContent) => (
				<NavHeading
					key={element.key}
					label={element.label}
					needToScroll={element?.needToScroll}
					route={element.route}
				/>
			))}
		</div>
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
			<Link href="/" >
				<img
					src="/header/GO.webp"
					alt="Gold One Logo"
					className={styles.imageContainer}
				/>
			</Link>
		</div>
	)
}
