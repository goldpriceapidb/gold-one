export default function PageBreak(): JSX.Element {
	return (
		<>
			<div className="pageBreak"></div>

			<style jsx>{`
				.pageBreak {
					display: block;
					margin: 0 auto;
					width: 100%;
					height: 1px;
					background-color: #33302c;
					border: 0;
					padding: 0;
					margin: 0;
					margin-top: 1em;
					margin-bottom: 1em;
					clear: both;
				}
			`}</style>
		</>
	)
}
