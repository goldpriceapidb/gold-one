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
