import { TitleProps } from "../../../types/GlobalTypes"
import { useRef, useEffect } from "react"
import styles from "../products.module.css"

export default function Title(props: TitleProps): JSX.Element {
	let spanRef = useRef(null)

	useEffect(() => {
		let animation = "animate__fadeInUp"

		let classList = ["animate__animated", animation]

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.previousElementSibling !== null) {
							entry.target.classList.remove("animate__fadeInUp")
							entry.target.classList.add(...classList)
						}
						observer.unobserve(entry.target)
					}
				})
			},
			{
				root: null,
				rootMargin: "140px",
				threshold: 0.1,
			}
		)

		if (spanRef?.current !== null) {
			observer.observe(spanRef?.current)
		}
	}, [])

	return (
		<>
			{props.needMarginTop && <div className={styles.marginTop}></div>}
			<span
				className={`${styles.partTitle}`}
				ref={spanRef}
			>
				{props.pageTitle}
			</span>
		</>
	)
}
