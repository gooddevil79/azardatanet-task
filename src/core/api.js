import { ENV } from "./settings";

const apiSetting = {
	baseURL: `${ENV.basePath}${ENV.apiUrl}`,
	headers: { accept: "application/json" },
};
const get = async (query = "") => {
	return fetch(`${apiSetting.baseURL}?apikey=${ENV.apiKey}&s=${query}`);
};

export default {
	movies: {
		list: query => {
			const res = fetch(
				`${apiSetting.baseURL}?apikey=${ENV.apiKey}&s=${query}`
			);
			return res;
		},
		select: id => {
			const res = fetch(`${apiSetting.baseURL}?apikey=${ENV.apiKey}&i=${id}`);
			return res;
		},
	},
};
