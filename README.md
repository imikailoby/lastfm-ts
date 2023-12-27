# @imikailoby/lastfm-ts

TypeScript-based client for the [Last.fm API](https://www.last.fm/api), designed to streamline access to its methods and JSON responses.

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

Example:

```ts
import { LastFm } from '@imikailoby/lastfm-ts’;

const lastFm = new LastFm('api_key'); // Insert your API key

lastFm.user.getInfo({ user: 'imikailoby' }).then((response) => {
    const { user } = response;
    // Do something with user data
});
```

This client accommodates varying response structures from different API methods by utilizing generic types.

For example, the response of [user.getPersonalTags](https://www.last.fm/api/show/user.getPersonalTags) varies based on the `taggingtype` parameter. Specify the `taggingtype` as a generic type when calling the function to ensure TypeScript accurately reflects the response structure.

```ts
import { LastFm } from '@imikailoby/lastfm-ts';

const lastFm = new LastFm('api_key'); // Insert your API key

// Use generic type 'artist' for specific response structure
lastFm.user.getPersonalTags<'artist'>({ user: 'imikailoby', taggingtype: 'artist', tag: 'rock' }).then((response) => {
    // Attempting to access 'albums' will result in a TypeScript error
    // Error: Property 'albums' does not exist on type 'UserGetPersonalTagsArtistsResponse'
    const errorExample = response.taggings.albums;

    // Accessing 'artists' is valid for 'artist' tagging type
    const validExample = response.taggings.artists;
});
```

## Roadmap

In the first version, only methods that do not require authentication will be implemented.

-   [x] `chart` methods
-   [x] `geo` methods
-   [x] `library` methods
-   [x] `tag` methods
-   [x] `user` methods

### TODO v2

-   [ ] `album` methods
-   [ ] `artist` methods
-   [ ] `auth` methods
-   [ ] `track` methods

## Notes

Some insights into specific feature implementations, highlighting discrepancies between the Last.fm API's documented and actual behaviors as of the dates mentioned.

It may also be useful to check the [support forum](https://support.last.fm/c/support/api/47) for questions and issues regarding the API.

-   `user.getFriends()` does not have the `recenttracks` param despite it being present in the documentation. [Reason why](https://support.last.fm/t/friends-recent-listening-is-not-returned-with-user-getfriends-method/5825).

-   The API returns the `streamable` attribute for some objects, but their interfaces do not have this attribute. [Reason why](https://support.last.fm/t/is-the-streamable-attribute-broken-it-always-returns-0/39723/1).

-   `user` does not have the `getWeeklyChartList()` method despite it being present in the documentation. Looks like the method is dead. [More info](https://support.last.fm/t/user-getweeklychartlist-doesnt-return-the-latest-charts/7333/2).

-   `geo.getTopTracks()` does not have the `location` param despite it being present in the documentation. [Reason why](https://support.last.fm/t/geo-gettoptracks-list-for-an-optional-location-metro/7446).

-   `tag` does not have the `getSimilar()` method despite it being present in the documentation. The method does not work and has not been fixed since October 2020. [More info](https://support.last.fm/t/tag-getsimilar-returns-nothing/7188).

-   `tag` does not have the `getWeeklyChartList()` method despite it being present in the documentation. Looks like the method is dead. [More info](https://support.last.fm/t/how-to-get-a-chart-from-a-tag-getweeklychartlist-result/43594).

-   All methods, where it is possible to specify `mbid` instead of other required attributes (e.g. `artist` and `album` in the `album.getTopTags()`) do not have the `mbid` param. Getting data by `mdis` is broken and has not been fixed yet. [More info](https://support.last.fm/t/track-gettoptags-by-mbid/2703/4).
