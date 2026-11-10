export const request = (url, method, data) => {
	return fetch(url, {
		method: method || 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: JSON.stringify(data),
	}).then((response) => response.json());
};
