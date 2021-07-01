const countBy = (x, n) => {
	const z = [];

	for (let i = 0; i < parseInt(n); i++) {
		z.push(parseInt(x)*(i+1));
	}

	return z;
}

countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2, 5); // [2,4,6,8,10]
