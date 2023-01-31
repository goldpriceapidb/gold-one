import { Dispatch, SetStateAction } from "react"

export interface QuoteType {
	verse: string
	saidBy: string
}

export interface CountryType {
	countryName: string
	countryCode: string
	key: string
}

export interface CountrySelect {
	setCountryCode: Dispatch<SetStateAction<string>>
    selectedKarat: string
    setRate: Dispatch<SetStateAction<number>>
}

export interface KaratSelect {
    setKarat: Dispatch<SetStateAction<string>>
    setRate: Dispatch<SetStateAction<number>>
    selectedCountry: string
}

export interface Country {
	_id: string
	countryName: string
	countryCode: string
	currency: string
    currencySymbol: string
	currentPrice: number
	goldLastUpdated: string
	currencyConversionRate: number
	createdAt: string
	updatedAt: string
	__v?: number
	previousPrice: number
	priceChange: number
	priceChangePercentage: number
}
