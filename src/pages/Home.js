import image from '../images/home-image.jpg';

export class Home {
	constructor() {
		this.content = {
			image: image,
			imageSource:
				'https://www.pexels.com/photo/traditional-indonesian-tumpeng-rice-dish-presentation-36956925/',
			headline: 'The Soul of Indonesia Spice',
			body: `Welcome to Bumbu Heritage. We bring the rich, complex, and vibrant flavors of the Indonesian archipelago straight to your plate. From the fiery sambals of Sumatra to the sweet, aromatic soy-glazed dishes of Java, our menu is a celebration of deep-rooted tradition and modern culinary elegance. Forget the generic fast food; sit down, relax, and let our centuries-old spice recipes tell you a story.`,
		};
	}

	render() {
		return `<div>
		<img src='${this.content.image}' >

		<div class='container'>
		<h1>${this.content.headline}</h1>
		<p>${this.content.body}</p>
		</div>

		</div>`;
	}
}
