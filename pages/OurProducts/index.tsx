import styles from "./products.module.css"
import Title from "./components/Title"
import FinalNotes from "./components/FinalNotes"
import GoldBarsContainer from "./components/GoldBarsContainer"
import GoldTypeHolder from "./components/GoldTypeHolder"

export default function Products(): JSX.Element {
	return (
		<div className={styles.productsContainer} id="our-products">
			<Title pageTitle="OUR PRODUCTS" needMarginTop={true} />
			<GoldTypeHolder />
			<GoldBarsContainer />
			<FinalNotes />
		</div>
	)
}
