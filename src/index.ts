import '../assets/css/main.css';

import { Header } from './components/Header';
import { resultContainer } from './components/resultContainer';
import { Footer } from './components/Footer';
import { MainForm } from './components/MainForm';
import { pageWrapper } from './components/pageWrapper';

class GrokDebugger {
	root: HTMLDivElement = document.getElementById('root') as HTMLDivElement


	initGrokParsing = () => {
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