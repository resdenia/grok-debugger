import { Logo } from './Logo';

export const Header = () => {

	const headerContainer = document.createElement('header');

	const navWrapper = document.createElement('nav');
	navWrapper.classList.add('header-navbar');
	navWrapper.classList.add('header-navbar__dark');

	const logo = Logo()

	headerContainer.appendChild(logo)

	headerContainer.appendChild(navWrapper)


	return headerContainer;

}