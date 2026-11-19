export const mapSelectOptions = (data) =>
	data.map((item) => {
		if (typeof item === 'string') {
			return { value: item, label: item };
		}
		return { value: item.name, label: item.name };
	});
