import styles from "../start.module.css"
import { countries } from "../data"
import { ChangeEvent, useEffect, useState } from "react"
import {
	CountryType,
	CountrySelect,
	KaratSelect,
	Country,
	RenderValue,
} from "../../../types/StartPageTypes"
import { get, set } from "idb-keyval"

const API_ENDPOINT: string = "https://gold-price.hop.sh/api"

export default function LiveSpotPrice(): JSX.Element {
	let [countryCode, setCountryCode] = useState("india")
	let [karat, setKarat] = useState("24")
	let [rate, setRate] = useState(0)
	let [currencySymbol, setCurrencySymbol] = useState("₹")
	const [check, setCheck] = useState(0)

	useEffect(() => {
		async function main(): Promise<void> {
			let data = await getData()
			await addToIDBStorage(data)
			console.log("Downloaded content")
		}
		main()
	}, [])

	useEffect(() => {
		updateValues({ countryCode, karat, setRate, setCurrencySymbol })
	}, [countryCode, karat])


	useEffect(() => {
		const id = setInterval(() => {
			if(countryCode !== "india") return
			updateValues({ countryCode, karat, setRate, setCurrencySymbol })
		}, 1000)
		return () => clearInterval(id)
	}, [countryCode, karat])

	return (
		<>
			<div className={styles.wrapper}>
				<span className={styles.headingTitle}>LIVE SPOT PRICE</span>

				<div className={styles.liveSpotPriceContainer}>
					<div className={styles.formContainer}>
						<CountrySelectOption setCountryCode={setCountryCode} />
						<PuritySelectOption setKarat={setKarat} />
						<p className={styles.value}>
							{rate} {currencySymbol}
						</p>
					</div>
				</div>
			</div>

			<div className={styles.mobileWrapper}>
				<span className={styles.headingTitle}>LIVE SPOT PRICE</span>

				<div className={styles.liveSpotPriceContainer}>
					<div className={styles.formContainer}>
						<CountrySelectOption setCountryCode={setCountryCode} />
						<PuritySelectOption setKarat={setKarat} />
						<p className={styles.value}>
							{rate} {currencySymbol}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

function CountrySelectOption(props: CountrySelect): JSX.Element {
	let handleChange = async (
		e: ChangeEvent<HTMLSelectElement>
	): Promise<void> => {
		props.setCountryCode(e.target.value)
	}

	return (
		<>
			<select
				className={styles.countrySelect}
				title="Select Country Name"
				onChange={handleChange}
				name="Select Country Name"
				defaultValue="india"
			>
				{countries.map((country: CountryType) => {
					const { countryCode, countryName, key } = country
					return (
						<CountryOption
							countryCode={countryCode}
							countryName={countryName}
							key={key}
						/>
					)
				})}
			</select>
		</>
	)
}

function PuritySelectOption(props: KaratSelect): JSX.Element {
	let handleChange = async (
		e: ChangeEvent<HTMLSelectElement>
	): Promise<void> => {
		props.setKarat(e.target.value)
	}

	return (
		<>
			<select
				className={styles.puritySelect}
				title="Select Purity"
				onChange={handleChange}
				name="Select Purity"
				defaultValue="24"
			>
				<option value="24">24 Karat</option>
				<option value="22">22 Karat</option>
				<option value="21">21 Karat</option>
				<option value="18">18 Karat</option>
				<option value="14">14 Karat</option>
				<option value="10">10 Karat</option>
				<option value="6">6 Karat</option>
			</select>
		</>
	)
}

function CountryOption(props: CountryType): JSX.Element {
	return (
		<>
			<option value={props.countryCode}>
				{props.countryName.toLocaleUpperCase()}
			</option>
		</>
	)
}


async function getCountryData(countryCode: string): Promise<Country> {
	let data: any = await get("countries")
	if (data === undefined) data = await getData()
	let countryData = data.filter(
		(country: Country) => country.countryCode === countryCode
	)
	if (countryCode === "india") {
		let response = await fetch(`${API_ENDPOINT}/country/india`)
		let data = await response.json()
		countryData[0].previousPrice = countryData[0].currentPrice
		countryData[0].currentPrice = data.value
	}
	return countryData[0]
}


async function getData(): Promise<Country[]> {
	let response = await fetch(`${API_ENDPOINT}/country/all`)
	let data = await response.json()
	return data
}

async function addToIDBStorage(data: Country[]): Promise<void> {
	await set("countries", data)
	return
}

async function updateValues({
	setCurrencySymbol,
	setRate,
	countryCode,
	karat: selectedKarat,
}: RenderValue): Promise<void> {
	let countryData = await getCountryData(countryCode)
	if (countryData.countryCode != countryCode) {
		console.log("Country code not found")
	}
	setCurrencySymbol(countryData.currencySymbol)

	let DEFAULT_KARAT = 24
	let rate = countryData.currentPrice / DEFAULT_KARAT
	rate = rate * parseInt(selectedKarat)

	let rateString = rate.toFixed(2)
	rate = parseFloat(rateString)
	setRate(rate)
}
