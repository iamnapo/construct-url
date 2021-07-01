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
export default function constructUrl(
	base: string | URL,
	path?: string,
	query?: string | [[string, unknown]] | Record<string, unknown> | URLSearchParams
): string;
