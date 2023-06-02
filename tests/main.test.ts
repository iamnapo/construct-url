import test from "node:test";
import { strict as assert } from "node:assert";

import constructUrl from "../index.js";

await test("main", () => {
	assert.equal(constructUrl("https://example.com", "/foo"), "https://example.com/foo");
	assert.equal(constructUrl("https://example.com", "foo"), "https://example.com/foo");
	assert.equal(constructUrl("https://example.com/", "/foo"), "https://example.com/foo");
	assert.equal(constructUrl("https://example.com/", "foo"), "https://example.com/foo");
	assert.equal(constructUrl(new URL("https://example.com"), "/foo"), "https://example.com/foo");
	assert.equal(constructUrl("https://example.com/foo", "/bar"), "https://example.com/foo/bar");
	assert.equal(constructUrl(new URL("/foo", "https://example.com"), "/bar"), "https://example.com/foo/bar");
	assert.equal(constructUrl("https://example.com", "/foo", { bar: "baz" }), "https://example.com/foo?bar=baz");
	assert.equal(constructUrl("https://example.com", "/foo", { "//bar//": "//baz//" }), "https://example.com/foo?%2F%2Fbar%2F%2F=%2F%2Fbaz%2F%2F");
	assert.equal(constructUrl("https://example.com", "", { bar: "baz" }), "https://example.com/?bar=baz");
	assert.equal(constructUrl("https://example.com", "", { bar: 4 }), "https://example.com/?bar=4");
	assert.equal(constructUrl("https://example.com", "", { bar: [1, 2, 3] }), "https://example.com/?bar=1%2C2%2C3");
	assert.equal(constructUrl("https://example.com", "", [["bar", "baz"], ["foo", "bar"]]), "https://example.com/?bar=baz&foo=bar");
});
