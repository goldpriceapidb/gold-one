import Head from "next/head"

function IndexPage(): JSX.Element {
	return (
		<>
			<Head>
				<link rel="apple-touch-icon" href="./apple-touch-icon.png" />
				<meta property="descript" content="Index Page" />
				<title>Gold One Refinery Private Limited</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
			</Head>
			<p>This is the index page</p>
		</>
	)
}

export default IndexPage
