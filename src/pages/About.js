import image from '../images/about-image.jpg';

export class About {
	constructor() {
		this.content = {
			image: image,
			imageSource:
				'https://www.pexels.com/photo/food-on-table-with-man-standing-behind-23408565/',
			headline: 'Beyond Just Food',
			body: `WelcomeBumbu Heritage was founded with a very simple mission: to elevate Indonesian traditional family recipes into a modern dining experience without losing their authentic soul. to Bumbu Heritage. We bring the rich, complex, and vibrant flavors of the Indonesian archipelago straight to your plate. From the fiery sambals of Sumatra to the sweet, aromatic soy-glazed dishes of Java, our menu is a celebration of deep-rooted tradition and modern culinary elegance. Forget the generic fast food: sit down, relax, and let our centuries-old spice recipes tell you a story.`,
			address: '14 Pahlawan Street, Samarinda, Indonesia',
			openTime: {
				weekday: 'Mon - Fri: 08.00 - 22.00',
				weekend: 'Sat - Sun: 09.00 - 24.00',
			},
			contacts: {
				phone: '+62 822 0000 1111',
				email: 'food@restaurant.com',
				socials: '@FoodRestaurant',
			},
		};
	}

	render() {
		return `<div>
		<img src='${this.content.image}' >
		<h1>${this.content.headline}</h1>
		<p>${this.content.body}</p>
		
		<div>
		<h2>Address</h2>
		<p>${this.content.address}</p>
		</div>

		<h2>Open Time</h2>
		<ul>
		<li>${this.content.openTime.weekday}</li>
		<li>${this.content.openTime.weekend}</li>
		</ul>
		</div>

		<h2>Contacts</h2>
		<ul>
		<li>Phone: ${this.content.contacts.phone}</li>
		<li>Emai: ${this.content.contacts.email}</li>
		<li>Socials: ${this.content.contacts.socials}</li>
		</ul>
		</div>

		</div>`;
	}
}
