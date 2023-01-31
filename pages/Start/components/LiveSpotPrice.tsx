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
