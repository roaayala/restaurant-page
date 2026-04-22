export class Home {
	constructor() {
		this.contents = {
			image: '',
			headline: 'The Soul of Indoensian Spice',
			body: `Welcome to Bumbu Heritage. We bring the rich, complex, and vibrant flavors of the Indonesian archipelago straight to your plate. From the fiery sambals of Sumatra to the sweet, aromatic soy-glazed dishes of Java, our menu is a celebration of deep-rooted tradition and modern culinary elegance. Forget the generic fast food; sit down, relax, and let our centuries-old spice recipes tell you a story.`,
		};
	}

	render() {
		return `<div>
		<h1>${this.contents.headline}</h1>
		<p>${this.contents.body}</p>
		</div>`;
	}
}
