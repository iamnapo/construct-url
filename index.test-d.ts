import constructUrl from "./index.js";

constructUrl("https://example.com", "/foo");
constructUrl("https://example.com/foo", "/bar");
constructUrl("https://example.com", "/foo", { bar: true });
constructUrl("https://example.com", "", { bar: true });
constructUrl("https://example.com", "/foo", { "//bar//": true });
