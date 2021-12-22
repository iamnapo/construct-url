import test from "ava";

import constructUrl from "../index.js";

test("main", (t) => {
	t.is(constructUrl("https://example.com", "/foo"), "https://example.com/foo");
	t.is(constructUrl("https://example.com", "foo"), "https://example.com/foo");
	t.is(constructUrl("https://example.com/", "/foo"), "https://example.com/foo");
	t.is(constructUrl("https://example.com/", "foo"), "https://example.com/foo");
	t.is(constructUrl(new URL("https://example.com"), "/foo"), "https://example.com/foo");
	t.is(constructUrl("https://example.com/foo", "/bar"), "https://example.com/foo/bar");
	t.is(constructUrl(new URL("/foo", "https://example.com"), "/bar"), "https://example.com/foo/bar");
	t.is(constructUrl("https://example.com", "/foo", { bar: "baz" }), "https://example.com/foo?bar=baz");
	t.is(constructUrl("https://example.com", "/foo", { "//bar//": "//baz//" }), "https://example.com/foo?%2F%2Fbar%2F%2F=%2F%2Fbaz%2F%2F");
	t.is(constructUrl("https://example.com", "", { bar: "baz" }), "https://example.com/?bar=baz");
});
