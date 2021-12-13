interface Input {

}

export const textareaField = (input: string, classNames: string[]) => {

	const textareaInput = document.createElement(input)


	classNames.forEach(className => {
		textareaInput.classList.add(className)
	})


	return textareaInput
}