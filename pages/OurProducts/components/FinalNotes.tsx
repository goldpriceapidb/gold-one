import styles from '../products.module.css'
import { goldBarData, iconsData, SocialMediaProps } from "../data"
import Link from "next/link"

export default function FinalNotes(): JSX.Element {
	return (
		<div className={styles.finalNotes}>
			<LeftBox />
			<RightBox />
		</div>
	)
}

function LeftBox(): JSX.Element {
	return (
		<div className={styles.leftBox}>
			<span className={styles.titleContent}>PLACE YOUR ORDER</span>
			<HereButton />
		</div>
	)
}

function HereButton(): JSX.Element {
	return (
		<div className={styles.hereButton}>
			<span>
				<Link href="/enquiry">
					HERE
				</Link>
			</span>
			<img
				src="/socials/select.webp"
				alt="Select Icon"
				height={35}
				width={35}
			/>
		</div>
	)
}

function RightBox(): JSX.Element {
	return (
		<div className={styles.rightBox}>
			<span className={styles.titleContent}>FIND US ON</span>
			<SocialIcons />
		</div>
	)
}

function SocialIcons(): JSX.Element {
	return (
		<div className={styles.iconsContainer}>
			{iconsData.map((icon: SocialMediaProps) => {
				return (
					<Icon
						key={icon.key}
						src={icon.src}
						alt={icon.alt}
						url={icon.url}
					/>
				)
			})}
		</div>
	)
}

function Icon(props: any): JSX.Element {
	return (
		<div className={styles.iconContainer}>
			<a href={props.url} target="_blank" rel="noreferrer">
				<img src={props.src} alt={props.alt} height={30} width={30} />
			</a>
		</div>
	)
}