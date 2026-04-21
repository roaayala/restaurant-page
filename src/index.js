import './style.css';

class App {
	constructor() {
		this.homePage = new Home();
		this.menuPage = new Menu();
		this.aboutPage = new About();

		this.contentContainer = document.querySelector('#content');

		this.init();
	}

	init() {
		this.contentContainer.innerHTML = this.homePage.render();

		this.onNavClick();
	}

	onNavClick(page) {
		this.navigateTo((page) => {
			this.contentContainer.innerHTML = '';

			if (page === 'home') {
				this.contentContainer.innerHTML = this.homePage.render();
			}

			if (page === 'menu') {
				this.contentContainer.innerHTML = this.menuPage.render();
			}

			if (page === 'about') {
				this.contentContainer.innerHTML = this.aboutPage.render();
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

class Home {
	constructor() {
		this.render();
	}

	render() {
		return `<h1>Home</h1>`;
	}
}

class Menu {
	constructor() {
		this.render();
	}

	render() {
		return `<h1>Menu</h1>`;
	}
}

class About {
	constructor() {
		this.render();
	}

	render() {
		return `<h1>About</h1>`;
	}
}

const app = new App();
