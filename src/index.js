import './style.css';

class App {
	constructor() {
		this.contentContainer = document.querySelector('#content');

		this.init();
	}

	init() {
		this.onNavClick();
	}

	onNavClick(page) {
		this.navigateTo((page) => {
			this.contentContainer.innerHTML = '';

			if (page === 'home') {
				this.contentContainer.innerHTML = `<h1>Home</h1>`;
			}

			if (page === 'menu') {
				this.contentContainer.innerHTML = `<h1>Menu</h1>`;
			}

			if (page === 'about') {
				this.contentContainer.innerHTML = `<h1>About</h1>`;
			}
		});
	}

	navigateTo(page) {
		document.querySelector('#nav').addEventListener('click', (e) => {
			const navLink = e.target.getAttribute('id');
			page(navLink);
		});
	}
}

const app = new App();
