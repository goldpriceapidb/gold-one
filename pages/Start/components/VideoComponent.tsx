import styles from "../start.module.css"

export default function VideoComponent(): JSX.Element {
	return (
		<>
		</>
	)
}

function YoutubeIframe(): JSX.Element {
	const VIDEO_SOURCE = "https://www.youtube.com/embed/-q1Xm7X7s_k"
	const EMBED_URL: string = `${VIDEO_SOURCE}/?autoplay=1`

	return (
		<iframe
			className={styles.video}
			title="Amazing Melting Pure Gold Technology - Modern Gold Coins and Bars Manufacturing Process"
			width="956"
			height="538"
			src={EMBED_URL}
			frameBorder={0}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
		></iframe>
	)
}
