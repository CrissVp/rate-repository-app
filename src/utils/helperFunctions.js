export const formatCount = (count) => {
	return Math.abs(count) >= 1000
		? Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + 'k'
		: Math.sign(count) * Math.abs(count);
};
