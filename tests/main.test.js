const test = require("ava");

const constructUrl = require("..");

test("main", (t) => {
	t.is(constructUrl("https://example.com", "/foo"), "https://example.com/foo");
	t.is(constructUrl("https://example.com/foo", "/bar"), "https://example.com/foo/bar");
	t.is(constructUrl("https://example.com", "/foo", { bar: "baz" }), "https://example.com/foo?bar=baz");
	t.is(constructUrl("https://example.com", "/foo", { "//bar//": "//baz//" }), "https://example.com/foo?%2F%2Fbar%2F%2F=%2F%2Fbaz%2F%2F");
	t.is(constructUrl("https://example.com", "", { bar: "baz" }), "https://example.com/?bar=baz");
});
