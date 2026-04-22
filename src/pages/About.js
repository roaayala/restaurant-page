export class About {
	constructor() {
		this.content = {
			image: '',
			headline: 'Beyond Just Food',
			body: [
				`WelcomeBumbu Heritage was founded with a very simple mission: to elevate Indonesian traditional family recipes into a modern dining experience without losing their authentic soul. to Bumbu Heritage. We bring the rich, complex, and vibrant flavors of the Indonesian archipelago straight to your plate. From the fiery sambals of Sumatra to the sweet, aromatic soy-glazed dishes of Java, our menu is a celebration of deep-rooted tradition and modern culinary elegance. Forget the generic fast food; sit down, relax, and let our centuries-old spice recipes tell you a story.`,
				`We don't believe in shortcuts. Every spice paste (bumbu) we use is pounded fresh daily in our kitchen, honoring the age-old techniques passed down through generations of Indonesian mothers and grandmothers. We source our ingredients directly from local farmers to ensure the boldest flavors. At Bumbu Heritage, we are not just serving meals; we are sharing our culture, our history, and our home with you.`,
			],
		};
	}

	render() {
		return `<div>
		<h1>${this.content.headline}</h1>
		<p>${this.content.body[0]}</p>
		<p>${this.content.body[1]}</p>
		</div>`;
	}
}
