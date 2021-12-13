export const Logo = () => {


	const logoLink = document.createElement('a');
	logoLink.setAttribute('href', '/');

	const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	const svgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');


	svgLogo.setAttributeNS(null, 'width', '43');
	svgLogo.setAttributeNS(null, 'height', '43');
	svgLogo.setAttributeNS(null, 'viewBox', '0 0 43 43');
	svgLogo.setAttributeNS(null, 'fill', 'none');
	svgCircle.setAttributeNS(null, 'cx', '21');
	svgCircle.setAttributeNS(null, 'cy', '21');
	svgCircle.setAttributeNS(null, 'r', '21');
	svgCircle.setAttributeNS(null, 'fill', '#E7E7E7');

	svgElem.setAttributeNS(null, 'fill-rule', 'evenodd');
	svgElem.setAttributeNS(null, 'clip-rule', 'evenodd');
	svgElem.setAttributeNS(null, 'd', 'M9 27.9168L20.5 34.5571L32 27.9168V14.6383L20.5 8L9.57529 14.3087C9.35493 14.4355 9.21842 14.6734 9.21842 14.9269C9.21842 15.1804 9.35493 15.4183 9.57529 15.5451L20.0027 21.5652V26.8247L9 20.4731V27.9168ZM20.498 33.4084L9.99262 27.3435V22.1932L14.6831 24.9003L14.6822 24.9018L20.4605 28.2814L26.5235 24.7828V17.7837L20.4624 14.2852L14.9223 17.4835L10.4899 14.925L20.5 9.14669L31.0035 15.2136V27.3435L20.498 33.4084ZM15.9158 18.057L20.5 20.7032L25.0463 18.0774L20.4624 15.4319L15.9158 18.057ZM25.5309 18.9448L20.9973 21.5633V26.8253L25.5309 24.2095V18.9448Z');
	svgElem.setAttributeNS(null, 'fill', '#002E42');

	svgLogo.appendChild(svgCircle);
	svgLogo.appendChild(svgElem);

	logoLink.appendChild(svgLogo);

	return logoLink;
}