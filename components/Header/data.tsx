import { NavHeadingContent } from "../../types/NavHeadingType"

export default function Data(): JSX.Element {
	return <></>
}

let headerContents: NavHeadingContent[] = [
	{
		label: "HOME",
		route: "/",
		key: "02fedbd1-4716-450e-869d-fdf610dcbbdd"
	},
	{
		label: "OUR PRODUCTS",
		route: "/#our-products",
		key: "6923882c-b305-4a4b-8d8c-c7ea8ea1f29f",
		needToScroll: true
	},
	{
		label: "OUR PROCESS",
		route: "/process",
		key: "fa176ba7-d0e0-47e3-bd12-703fb3d52ea4"
	},
	{
		label: "CERTIFICATION",
		route: "/certification",
		key: "202393c6-5afd-44a3-bc71-ca9a0e9f360e"
	},
	{
		label: "ABOUT US",
		route: "/about",
		key: "50aa82eb-226e-464a-a4f2-e3d63fb87a77"
	},
	{
		label: "CONTACT US",
		route: "/contact",
		key: "a5e6bfa3-35fe-490c-8ade-c400cf3ad913"
	},
	{
		label: "CAREERS",
		route: "/careers",
		key: "98191101-fa3a-402d-b89b-8ce53b39937c"
	},
	{
		label: "ENQUIRIES",
		route: "/enquiry",
		key: "e39b1cd0-dcf0-42df-8d1a-ee7b67df08ff"
	},
]

export { headerContents }
