# @imikailoby/lastfm

[Last.fm API](https://www.last.fm/api) client.

---

### Notes:

-   **24.12.2023** | `user.getFriends()` does not have the `recenttracks` param despite it being present in the documentation. [Reason why](https://support.last.fm/t/friends-recent-listening-is-not-returned-with-user-getfriends-method/5825).

-   **24.12.2023** | The API returns the `streamable` attribute for some objects, but their interfaces do not have this attribute. [Reason why](https://support.last.fm/t/is-the-streamable-attribute-broken-it-always-returns-0/39723/1).
