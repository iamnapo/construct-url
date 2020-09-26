/**
Small utility function to construct URLs, without caring about slashes or encoding.
```
import cUrl from "@iamnapo/construct-url";
cUrl("https://example.com", "/foo"); // => "https://example.com/foo"
cUrl("https://example.com/foo", "/bar"); // => "https://example.com/foo/bar"
cUrl("https://example.com", "/foo", { bar: true }); // => "https://example.com/foo?bar=true"
cUrl("https://example.com", "", { bar: true }); // => "https://example.com/?bar=true"
cUrl("https://example.com", "/foo", { "//bar//": true }); // => "https://example.com/foo?%2F%2Fbar%2F%2F=true"
```
*/
declare function constructUrl(
	base: string | URL,
	path?: string,
	query?: string | [[string, any]] | { [key: string]: any } | URLSearchParams
): string;
export = constructUrl;
