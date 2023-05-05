function sortEmotions(arr, order) {
	const emoteValues = {
		':D': 1,
		':)': 2,
		':|': 3,
		':(': 4,
		'T_T': 5,
	};
	arr = arr.sort((a, b) => emoteValues[a] - emoteValues[b]);
	return (order && arr) || arr.reverse();
}
