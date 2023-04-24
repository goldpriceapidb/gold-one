import { GoldBar } from "../../../types/GlobalTypes"
import { goldBarData } from "../data"
import styles from "../products.module.css"
import { useSpring, animated, config, useTrail } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export default function GoldBarsContainer(): JSX.Element {
	const images = [
		{ id: 1, src: '/img/bar-type1.png' },
		{ id: 2, src: '/img/bar-type2.png' },
		{ id: 3, src: '/img/bar-type3.png' },
		{ id: 4, src: '/img/bar-type4.png' },
		{ id: 5, src: '/img/bar-type5.png' },
		{ id: 6, src: '/img/bar-type6.png' },
	];

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const animatedProps = useSpring({
		opacity: inView ? 1 : 0,
		y: inView ? 0 : 50,
		from: { opacity: 0, y: 50 },
		delay: 250,
		config: config.gentle,
	});

	const staggeredProps = useTrail(images.length, {
		to: { opacity: inView ? 1 : 0, y: inView ? 0 : 50 },
		from: { opacity: 0, y: 50 },
		config: { tension: 200, friction: 20 },
		delay: 300,
	});

	return (
		<animated.div ref={ref} style={animatedProps} className={styles.barsContainer}>
			{staggeredProps.map((props: any, index: any) => (
				<div className={styles.barsImageHover}>
					<animated.img
						key={images[index].id}
						src={images[index].src}
						alt={`Bar ${images[index].id}`}
						style={{ ...props }}
						className={styles.barsImage}

					/></div>
			))}
		</animated.div>
	);
}

function GoldBar({ goldType, value, unit, barNumber }: GoldBar): JSX.Element {
	return (
		<>
			<div className={styles.goldBar}>
				<div className={styles.logoContainer}>
					<img
						src="/header/GO.webp"
						alt="Gold One"
						height={120}
						width={120}
					/>
				</div>
				<div className={styles.gramsContainer}>
					<span className={styles.value}>{value}</span>
					<span className={styles.unit}>{unit}</span>
				</div>
				<span className={styles.goldTypeSmall}>{goldType}</span>
				<span className={styles.barNumber}>{barNumber}</span>
			</div>
			<div className={styles.separator}></div>
		</>
	)
}
