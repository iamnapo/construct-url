# @iamnapo/construct-url

> Small utility function to construct URLs, without caring about slashes or encoding

[![build](https://badges.iamnapo.me/ci/iamnapo/construct-url)](https://github.com/iamnapo/construct-url/actions) [![npm](https://badges.iamnapo.me/npm/@iamnapo/construct-url)](https://www.npmjs.com/package/@iamnapo/construct-url) [![size](https://badges.iamnapo.me/size/@iamnapo/construct-url)](https://bundlephobia.com/result?p=@iamnapo/construct-url)

## Install

```sh
npm i @iamnapo/construct-url
```

## Usage

```js
import constructUrl from "@iamnapo/construct-url";

constructUrl("https://example.com", "/foo"); // => "https://example.com/foo"
constructUrl("https://example.com/foo", "/bar"); // => "https://example.com/foo/bar"
constructUrl("https://example.com", "/foo", { bar: true }); // => "https://example.com/foo?bar=true"
constructUrl("https://example.com", "", { bar: true }); // => "https://example.com/?bar=true"
constructUrl("https://example.com", "/foo", { "//bar//": true }); // => "https://example.com/foo?%2F%2Fbar%2F%2F=true"
```

## API

### constructUrl(base, path?, query?)

Get a full URL, including encoded query parameters.

#### base

Type: `string | URL`

Base URL.

#### path

Type: `string`\
Default: `""`

Path relative to `base`.

#### query

Type: `string | [[string, any]] | { [key: string]: any } | URLSearchParams`\
Default: `""`

Query parameters to include in the resuliting URL.
