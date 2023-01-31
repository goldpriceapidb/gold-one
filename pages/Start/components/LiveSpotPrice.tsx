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
	setCurrencySymbol(countryData.currencySymbol)
	
	let DEFAULT_KARAT = 24
	let rate = countryData.currentPrice / DEFAULT_KARAT
	rate = rate * parseInt(selectedKarat)
	
	let rateString = rate.toFixed(2)
	rate = parseFloat(rateString)
	setRate(rate)
}
