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
		// set intial page to home
		this.navigateTo('home');

		// listen to navigation event
		this.setupNavigation();
	}

	setupNavigation() {
		document.querySelector('#nav').addEventListener('click', (e) => {
			this.onNavigationClick(e);
		});
	}

	onNavigationClick(e) {
		const button = e.target.closest('button');

		if (!button) {
			return;
		}

		const targetId = button.getAttribute('id');

		this.navigateTo(targetId);
	}

	navigateTo(page) {
		if (page === 'home') {
			this.contentContainer.innerHTML = this.homePage.render();
		}

		if (page === 'menu') {
			this.contentContainer.innerHTML = this.menuPage.render();
		}

		if (page === 'about') {
			this.contentContainer.innerHTML = this.aboutPage.render();
		}
	}
}

class Home {
	constructor() {}

	render() {
		return `<h1>Home</h1>`;
	}
}

class Menu {
	constructor() {}

	render() {
		return `<h1>Menu</h1>`;
	}
}

class About {
	constructor() {}

	render() {
		return `<h1>About</h1>`;
	}
}

const app = new App();
