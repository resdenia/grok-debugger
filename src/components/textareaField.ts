interface Input {

}

export const textareaField = (input: string, classNames: string[], id: string) => {

	const textareaInput = document.createElement(input)


	classNames.forEach(className => {
		textareaInput.classList.add(className)
	})

	textareaInput.setAttribute('id', id)

	return textareaInput
}