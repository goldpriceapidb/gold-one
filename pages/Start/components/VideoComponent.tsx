import { useState } from "react"
import styles from "../start.module.css"

export default function VideoComponent(): JSX.Element {
	return (
		<>
			<div className={styles.videoWrapper}>
				<Video />
			</div>
		</>
	)
}

function Video(): JSX.Element {
	const [showVideo, setShowVideo] = useState(false)
	const [showButton, setShowButton] = useState(true)

	let handleClick = () => {
		setShowVideo(!showVideo)
		setShowButton(!showButton)
	}

	return (
		<>
			<YoutubeIframe />

			{/* {showButton && (
				<div onClick={handleClick} className={styles.videoOverlay}>
					<ImageOverlay />
				</div>
			)}
			{showVideo && <YoutubeIframe />} */}
		</>
	)
}

function ImageOverlay(): JSX.Element {
	return (
		<>
			<img
				src="/whyChoose/videoStaticBackground.webp"
				alt="video"
				height={538}
				width={956}
			/>
			<img
				className={styles.playButton}
				src="/whyChoose/play.svg"
				alt="play"
				height={100}
				width={100}
			/>
		</>
	)
}

function YoutubeIframe(): JSX.Element {
	const VIDEO_SOURCE = "/video/video.webm"
	const EMBED_URL: string = `${VIDEO_SOURCE}`

	return (
		// <iframe
		// 	className={styles.video}
		// 	width="956"
		// 	height="538"
		// 	src={EMBED_URL}
		// 	frameBorder={0}
		// 	allow="accelerometer; autoplay=true; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		// 	allowFullScreen
		// ></iframe>

		<video
			className={styles.video}

			controls
		>
			<source src={EMBED_URL} type="video/mp4" />

		</video>


	)
}
