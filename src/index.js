import './style.css';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';

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

const app = new App();
