export const GET_Request = () => {
	const apiCall = async (payload: { endpoint: any } ) => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		};
		return fetch(payload.endpoint, options)
			.then((response) => {
				return response.text();
			})
			.then((result) => {
				return JSON.parse(result);
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	return apiCall;
};
