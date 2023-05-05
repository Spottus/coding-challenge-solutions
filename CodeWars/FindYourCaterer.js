function findCaterer(budget, people) {
	if (people === 0 || budget < people * 15) return -1;

	let ChosenCaterer = [15, 20, 30]
		.map((caterCost, index) => {
			const price = caterCost * people;

			return index === 2 && people > 60 ? price - price * 0.2 : price;
		})
		.filter((cater) => cater <= budget);

	return ChosenCaterer.length;
}
