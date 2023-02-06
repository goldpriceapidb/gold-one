
async function sendContent(props: MailParams): Promise<string> {
	try {
		let request = await fetch(
			"https://api.emailjs.com/api/v1.0/email/send",
			{
				method: "POST",
				body: JSON.stringify(props),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		let response = await request.text()
		alert(`Sent successfully: ${response}`)
		return "OK"
	} catch (_) {
		alert("Error sending mail")
		return "NOPE"
	}
}

async function sendMail(props: DataProps): Promise<string> {
	let data = requestConstructor(props)
	return await sendContent(data)
}

function sendSuccess(response: string): boolean {
	if (response === "OK") return true
	return false
}

function requestConstructor(props: DataProps): MailParams {
	let data: MailParams = {
		service_id: "service_3my3s1s",
		template_id: "template_rld89ic",
		user_id: "YwEZ6_J84gx8JglSG",
		template_params: {
			submissionName: props.submissionName,
			submissionPhone: props.submissionPhone,
			formType: props.formType,
			sendTo: SEND_TO,
			copyTo: COPY_TO,
		},
	}
	return data
}
