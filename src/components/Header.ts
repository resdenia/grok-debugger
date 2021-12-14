import { Logo } from './Logo';

export const Header = () => {

	const headerContainer = document.createElement('header');

	const navWrapper = document.createElement('nav');
	navWrapper.classList.add('header-navbar');
	navWrapper.classList.add('header-navbar__dark');

	const logo = Logo()


	const title = document.createElement('h1');
	title.textContent = 'Grok Debugger';
	title.classList.add('header_title');

	headerContainer.appendChild(logo)

	headerContainer.appendChild(title)
	headerContainer.appendChild(navWrapper)


	return headerContainer;

}