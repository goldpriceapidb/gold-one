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
}

export interface KaratSelect {
    setKarat: Dispatch<SetStateAction<string>>
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

export interface RenderValue {
	setCurrencySymbol: Dispatch<SetStateAction<string>>
	setRate: Dispatch<SetStateAction<number>>
	countryCode: string
	karat: string
}

export interface RenderValuesForIndia {
	setCurrencySymbol: Dispatch<SetStateAction<string>>
	setRate: Dispatch<SetStateAction<number>>
	currencySymbol: string | undefined
	rate: number | undefined
}

export interface PromiseOfUpdateIndiaFunction {
	currencySymbol: string
	rate: number
}

export interface Icons {
	text: string
	iconSrc: string
	key: string
}