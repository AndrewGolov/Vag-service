export const getYearOptions = () => {
	const lastYear = new Date().getFullYear();
	let yearsArr = [];
	for (let index = 1950; index <= lastYear; index++) {
		yearsArr.push({ value: String(index), label: String(index) });
	}
	return yearsArr.reverse();
};
