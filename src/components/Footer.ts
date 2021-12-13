export const Footer = () => {

	const footerContainer = document.createElement('footer');

	const divCopy = document.createElement('div');
	const paragraphCopy = document.createElement('p');
	paragraphCopy.textContent = "All rights is OK";
	divCopy.appendChild(paragraphCopy);

	footerContainer.appendChild(divCopy)

	return footerContainer;
}