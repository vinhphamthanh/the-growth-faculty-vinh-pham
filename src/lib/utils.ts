export const getTotal = (data) => {
	return Object.keys(data).map(key => data[key]).reduce((acc, item) => acc + item.cost, 0)
}

export const generateOrderRef = (len = 32) => {
	const letters = 'abcdef0123456789';
	let result = '';

	for (let i = 0; i < len; i++) {
		result += letters[Math.floor(Math.random() * letters.length)];
	}

	return result
}
