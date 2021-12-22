/**
Small utility function to construct URLs, without caring about slashes or encoding.
```
import constructUrl from "@iamnapo/construct-url";
constructUrl("https://example.com", "/foo"); // => "https://example.com/foo"
constructUrl("https://example.com/foo", "/bar"); // => "https://example.com/foo/bar"
constructUrl("https://example.com", "/foo", { bar: true }); // => "https://example.com/foo?bar=true"
constructUrl("https://example.com", "", { bar: true }); // => "https://example.com/?bar=true"
constructUrl("https://example.com", "/foo", { "//bar//": true }); // => "https://example.com/foo?%2F%2Fbar%2F%2F=true"
```
*/
const constructUrl = (
	base: string | URL,
	path = "",
	query: string | [[string, unknown]] | Record<string, unknown> | URLSearchParams = "",
) => {
	if (typeof base !== "string" && !(base instanceof URL)) throw new TypeError("`base` must be a string or URL");
	if (typeof path !== "string") throw new TypeError("`path` must be a string");

	base = String(base);
	if (!base.endsWith("/")) base += "/";
	if (path.startsWith("/")) path = path.slice(1);

	try {
		const url = new URL(path, base);
		if (query) {
			const queryParams = new URLSearchParams(query as string);
			url.search = String(queryParams);
		}

		return url.toString();
	} catch (error) {
		throw new TypeError((error as Error).message);
	}
};

export default constructUrl;
