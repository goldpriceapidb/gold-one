import { useState } from "react"
import { DataProps, MailParams } from "../../types/MailTypes"
import styles from "./formToMail.module.css"

const SEND_TO: string = "refinery@goldone.in"
const COPY_TO: string = "worldisfullofmeow@gmail.com"

interface QuestionProps {
	type: "career" | "enquiry"
}

export default function Question(props: QuestionProps): JSX.Element {
	let [name, setName] = useState("")
	let [phone, setPhone] = useState("")
	let type = props.type

	let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.name === "name") {
			setName(event.target.value)
		} else if (event.target.name === "phone") {
			setPhone(event.target.value)
		}
	}

	let handleSubmit = async (): Promise<void> => {
		let data: DataProps = {
			submissionName: name,
			submissionPhone: phone,
			formType: type,
		}
		let value = await sendMail(data)
		if (sendSuccess(value)) {
			setName("")
			setPhone("")
		}
	}

	return (
		<>
			{type !== undefined && (
				<div className={styles.form}>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Name"
						className={styles.formField}
						value={name}
						onChange={handleChange}
					></input>
					<br />
					<input
						type="text"
						id="phone"
						name="phone"
						placeholder="Phone"
						className={styles.formField}
						value={phone}
						onChange={handleChange}
					></input>
					<br />
					<button
						type="button"
						onClick={handleSubmit}
						className={styles.formSubmit}
					>
						Submit
					</button>
				</div>
			)}
		</>
	)
}

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
