# @imikailoby/lastfm

[Last.fm API](https://www.last.fm/api) client.

> [!NOTE]
> This package is currently under development in my spare time. All available API methods will be added shortly. Please note that this is a work in progress, and as such, the functionality and features are subject to change.

---

### TODO list:

-   [ ] album
-   [ ] artist
-   [ ] auth
-   [ ] chart
-   [ ] geo
-   [ ] library
-   [ ] tag
-   [ ] track
-   [x] user

---

### Notes:

-   **24.12.2023** | `user.getFriends()` does not have the `recenttracks` param despite it being present in the documentation. [Reason why](https://support.last.fm/t/friends-recent-listening-is-not-returned-with-user-getfriends-method/5825).

-   **24.12.2023** | The API returns the `streamable` attribute for some objects, but their interfaces do not have this attribute. [Reason why](https://support.last.fm/t/is-the-streamable-attribute-broken-it-always-returns-0/39723/1).

-   **24.12.2023** | `user` does not have the `getWeeklyChartList()` method despite it being present in the documentation. Looks like the method is dead. [More info](https://support.last.fm/t/user-getweeklychartlist-doesnt-return-the-latest-charts/7333/2).
