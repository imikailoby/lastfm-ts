# @imikailoby/lastfm-ts

TypeScript-based client for the [Last.fm API 2.0](https://www.last.fm/api), designed to streamline access to its public methods and JSON responses.

### Key features

-   **Zero Dependencies**: Designed to function independently without any external dependencies.
-   **Pure Responses**: No altered or decorated data from the API. Use API's original responses as you wish.
-   **Minimal size**: ≈1.1kb minified and gzipped size ([Bundlephobia](https://bundlephobia.com/package/@imikailoby/lastfm-ts)).

## Installation

```zsh
# via yarn
yarn add @imikailoby/lastfm-ts

# via npm
npm install @imikailoby/lastfm-ts
```

## Usage

1. Obtain the **Last.fm API Key** ([Read more](https://www.last.fm/api#getting-started)).
2. Initialize the `LastFm` class with the obtained API key.
3. Use one of the [available methods](https://github.com/imikailoby/lastfm-ts/wiki#available-methods) to get the required data.

Example:

```ts
import { LastFm } from '@imikailoby/lastfm-ts’;

const lastFm = new LastFm('api_key'); // Insert your API key

lastFm.user.getInfo({ user: 'imikailoby' }).then((response) => {
    const { user } = response;
    // Do something with user data
});
```

## Documentation

For comprehensive documentation, including detailed parameter descriptions, usage examples, FAQs, and more, please refer to the [repository wiki](https://github.com/imikailoby/lastfm-ts/wiki).
