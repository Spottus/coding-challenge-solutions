//return the total number of smiling faces in the array
function countSmileys(arr) {
	const faceRegExp = /^[:;][-~]{0,1}[)D]/;
	return arr.filter((face) => {
		return faceRegExp.test(face);
	}).length;
}
