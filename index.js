const constructUrl = (base, path = "", query = "") => {
	if (typeof base !== "string" && !(base instanceof URL)) throw new TypeError("`base` must be a string or URL");
	if (typeof path !== "string") throw new TypeError("`path` must be a string");

	base = String(base);
	if (!base.endsWith("/")) base += "/";
	if (path.startsWith("/")) path = path.slice(1);

	try {
		const url = new URL(path, base);
		if (query) {
			const queryParams = new URLSearchParams(query);
			url.search = queryParams;
		}
		return url.toString();
	} catch (error) {
		throw new TypeError(error.message);
	}
};

export default constructUrl;
