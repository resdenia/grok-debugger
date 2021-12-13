export const Button = (type: string, label: string, classNames: string[]) => {

	const button = document.createElement('button');


	classNames.forEach(className => {
		button.classList.add(className)
	})

	button.setAttribute('type', type);
	button.textContent = label;

	return button;

}