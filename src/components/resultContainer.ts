export const resultContainer = () => {

	const resultContainer = document.createElement('pre');

	resultContainer.setAttribute('id', 'parsedLogs');
	resultContainer.classList.add('result-container')

	return resultContainer

}