export interface TemplateParams {
	submissionName: string
	formType: string
	submissionPhone: string
	sendTo: string
	copyTo: string
}

export interface MailParams {
	service_id: string
	template_id: string
	user_id: string
	template_params: TemplateParams
}

export interface MailData {
	data: MailParams
}

export interface DataProps {
	submissionName: string
	submissionPhone: string
	formType: string
}
