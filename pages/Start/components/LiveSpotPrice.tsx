import {
	CountryType,
	CountrySelect,
	KaratSelect,
	Country,
	RenderValue,
} from "../../../types/StartPageTypes"
export default function LiveSpotPrice(): JSX.Element {
	return (
		<>
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
