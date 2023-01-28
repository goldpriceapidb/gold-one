import { Dispatch, SetStateAction } from "react"

export interface QuoteType {
	verse: string,
    saidBy: string
}

export interface CountryType {
    countryName: string,
    countryCode: string,
    key: string
}

export interface CountrySelect {
	setCountryCode: Dispatch<SetStateAction<string>>
}