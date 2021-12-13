import '../assets/css/main.css';

import { Header } from './components/Header';
import { Button } from './components/Button';
import { resultContainer } from './components/resultContainer';
import { textareaField } from './components/textareaField';



class GrokDebugger {
	root: HTMLDivElement = document.getElementById('root') as HTMLDivElement


	initGrokParsing = () => {
	}


	initPage = () => {
		const header = Header();
		const result = resultContainer();

		this.root.appendChild(header);
		this.root.appendChild(result)
	}
}

const initGrokDebugger = new GrokDebugger();


initGrokDebugger.initPage();
initGrokDebugger.initGrokParsing()