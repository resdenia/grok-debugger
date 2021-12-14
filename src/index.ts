import '../assets/css/main.css';
import '../assets/css/prism.css';

import { Header } from './components/Header';
import { resultContainer } from './components/resultContainer';
import { Footer } from './components/Footer';
import { MainForm } from './components/MainForm';
import { pageWrapper } from './components/pageWrapper';
import 'prismjs';
import 'prismjs/components/prism-json';
// import { onSubmit } from './utils/onSubmit';

class GrokDebugger {
	root: HTMLDivElement = document.getElementById('root') as HTMLDivElement


	initGrokParsing = () => {

		document.querySelector('.formGrok')?.addEventListener('submit', async (e: Event) => {
			e.preventDefault();
			// const { text, pattern } = req.body;
			const { target } = e;
			console.log();
			if (!target[0]) {
				return
			}
			if (!target[1]) {
				return
			}
			const text = target[0].value;
			const pattern = target[1].value;

			try {
				const response = await fetch('/api/grok', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						text: text,
						pattern: pattern
					})
				})
				const responseData = await response.json();
				const renderDisplay = document.querySelector('#parsedLogs');
				const contentWithSpaces = JSON.stringify(responseData, null, "&nbsp;").split('&nbsp;').join('  ');
				(renderDisplay as HTMLElement).textContent = contentWithSpaces

			} catch (e) {
				console.log(e);
			}

		})

	}


	initPage = () => {
		const header = Header();
		const footer = Footer();
		const result = resultContainer();
		const mainForm = MainForm();
		const mainWrapper = pageWrapper();

		mainWrapper.appendChild(mainForm);
		mainWrapper.appendChild(result);


		this.root.appendChild(header);
		this.root.appendChild(mainWrapper);
		this.root.appendChild(footer)
	}
}

const initGrokDebugger = new GrokDebugger();


initGrokDebugger.initPage();
initGrokDebugger.initGrokParsing()