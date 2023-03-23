import Head from "next/head"
import Contact from "./ContactPage"
function ContactPage(): JSX.Element {
	return (
		<>
			<Head>
				<link rel="apple-touch-icon" href="./apple-touch-icon.png" />
				<meta property="descript" content="Index Page" />
				<title>Gold One Refinery Private Limited</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
			</Head>

			<Contact />
			<style global jsx>{`
				@font-face {
					font-family: "Bahnschrift";
					src: url("fonts/Bahnschrift.eot");
					src: local("Bahnschrift"),
						url("fonts/Bahnschrift.eot?#iefix")
							format("embedded-opentype"),
						url("fonts/Bahnschrift.woff2") format("woff2"),
						url("fonts/Bahnschrift.woff") format("woff"),
						url("fonts/Bahnschrift.ttf") format("truetype"),
						url("fonts/Bahnschrift.svg#Bahnschrift") format("svg");
					font-weight: normal;
					font-style: normal;
					font-display: swap;
				}

				* {
					font-family: "Bahnschrift", system-ui, -apple-system,
						BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
						Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
					font-weight: 400;
				}

				body {
					margin: 0;
					padding: 0;
					background-color: #000000;
				}
			`}</style>
		</>
	)
}

export default ContactPage
