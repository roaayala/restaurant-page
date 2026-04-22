export class Menu {
	constructor() {
		this.content = {
			image: '',
			headline: 'Taste The Archipelago',
			menus: [
				{
					name: 'Signature Beef Rendang',
					description:
						'The undisputed king of curries. Slow-cooked, caramelized beef simmered for 8 hours in rich coconut milk and our secret blend of 15 native spices. Tender, complex, and unforgettable.',
					price: 125_000,
				},
				{
					name: 'Madura Chicken Satay',
					description:
						'Perfectly char-grilled chicken skewers marinated in sweet soy sauce. Served generously with our signature crushed peanut sauce, a sprinkle of crispy shallots, and fresh lime.',
					price: 99_000,
				},
				{
					name: 'The Ultimate Nasi Goreng',
					description: `Indonesia's ultimate comfort food. Wok-tossed fried rice infused with a hint of aromatic shrimp paste, topped with a crispy sunny-side-up egg, chicken chunks, and served with traditional prawn crackers.`,
					price: 65_000,
				},
				{
					name: 'Es Cendol Deligt',
					description: `Cool down your palate with this traditional sweet treat. Chewy pandan jelly droplets bathed in fresh, creamy coconut milk and rich, melted palm sugar syrup.`,
					price: 49_000,
				},
			],
		};
	}

	render() {
		return `<div>
		<h1>${this.content.headline}</h1>
	${this.content.menus.map((menu) => {
		return `<div>
		<h2>${menu.name} (Rp. ${menu.price})</h2>
		<p>${menu.description}</p>
		</div>`;
	})}
		</div>`;
	}
}
