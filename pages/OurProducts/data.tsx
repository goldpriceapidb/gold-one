import { GoldBar } from "../../types/GlobalTypes"

export default function Data(): JSX.Element {
	return <></>
}

let goldBarData: GoldBar[] = [
	{
		value: 1000,
		unit: "G",
		goldType: 995,
		barNumber: 120354,
        key: "d07f2176-9b3b-497e-9681-dfc730497433"
	},
	{
		value: 100,
		unit: "G",
		goldType: 995,
		barNumber: 120354,
        key: "e9583c9e-85bb-45d3-98dd-fccc65747b1f"
	},
	{
		value: 1000,
		unit: "G",
		goldType: 999,
		barNumber: 120354,
        key: "d685aee3-6af2-4f23-af62-f2db7b1115d6"
	},
	{
		value: 100,
		unit: "G",
		goldType: 999,
		barNumber: 120354,
        key: "3d459285-9360-45b6-ba64-b2084135aaef"
	},
]

export interface SocialMediaProps {
    src: string
    alt: string
    url: string
    key?: string
}

let iconsData: SocialMediaProps[] = [
	{
		src: "/socials/facebook.svg",
		alt: "Facebook",
		url: "https://www.facebook.com/GoldOneSA",
        key: "3d459285-9360-45b6-ba64-b2084135aaef"

	},
	{
		src: "/socials/instagram.svg",
		alt: "Instagram",
		url: "https://www.instagram.com/goldonesa/",
        key: "d685aee3-6af2-4f23-af62-f2db7b1115d6"

	},
	{
		src: "/socials/twitter.svg",
		alt: "Twitter",
		url: "https://twitter.com/GoldOneSA",
        key: "e9583c9e-85bb-45d3-98dd-fccc65747b1f"

	},
	{
		src: "/socials/whatsapp.svg",
		alt: "WhatsApp",
		url: "https://wa.me/27720000000",
        key: "d07f2176-9b3b-497e-9681-dfc730497433"
	}
]


export { goldBarData, iconsData }
