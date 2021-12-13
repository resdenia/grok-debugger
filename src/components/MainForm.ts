import { textareaField } from './textareaField';
import { Button } from './Button';


export const MainForm = (className: string = 'formGrok') => {

	const formContainer = document.createElement('form');

	formContainer.classList.add(className)

	const button = Button('submit', 'Parse', ['form-button', 'form-button__submit-yellow']);
	const textareaFieldLog = textareaField('textarea', ['form-field', 'form-field__log', 'form-field__log-dark'], 'logArea');

	const textareaFieldPattern = textareaField('textarea', ['form-field', 'form-field__pattern', 'form-field__pattern-dark'], 'patternArea');

	formContainer.appendChild(textareaFieldLog);
	formContainer.appendChild(textareaFieldPattern);
	formContainer.appendChild(button)

	return formContainer;
}