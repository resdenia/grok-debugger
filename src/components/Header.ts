import { Logo } from './Logo';

export const Header = () => {

	const headerContainer = document.createElement('header');

	const navWrapper = document.createElement('nav');
	navWrapper.classList.add('navbar');
	navWrapper.classList.add('dark-color');

	const logo = Logo()

	headerContainer.appendChild(logo)

	headerContainer.appendChild(navWrapper)


	return headerContainer;

}