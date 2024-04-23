const ENV = {
	apiUrl: "",
	basePath: import.meta.env.DEV ? import.meta.env.VITE_API_URL : "",
	apiKey: import.meta.env.VITE_API_KEY || null,
	devMode: import.meta.env.DEV,
};

export { ENV };
