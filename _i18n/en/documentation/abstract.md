---
title: "Zenbus Documentation"
author: "Lionel Delourme"
date: '2018-01-12'
output: pdf_document
license: CC BY 4.0
version: draft
---

About this document
===================

Although we very much consume our own APIs, in typical start-up fashion they are lacking in clear, up-to-date and friendly documentation (historically Zenbus has been a very standalone solution).

The usual caveats are somewhat compounded by a major overhaul of the server architecture, currently under way (services are progressively undergoing "shadow deployment", scheduled to end by march 2018 - then the new version will go live).

No breaking changes are expected, but where (and when) the new "phoenix" version adds alternate or new options, these services and APIs should be preferred to the "legacy" ones.

Quick note: the current "legacy" [GAE][] app consists of 3 main modules (main API, admin, data crunching). The "phoenix" architecture is much more modularized, with a dozen services, better performance across the board and more features. This will make deploying custom services (for 3rd parties) way easier and more efficient.

This is a technical document. If you don't know what Zenbus is about, you should be still able to infer the features from reading the following.

Familiarity with [GTFS][], [GTFS-RT][], [SIRI][], [AVL][] and [passenger information][PIS] systems, related concepts and projects is assumed.

This is a very sparse draft.

Usual disclaimers, trademark stuff, this is under [CC BY 4.0][]...



Account setup
=============

Purely internal API.


### Legacy

Accounts are used as namespaces for most of the data (i.e. transit feeds and their static info, related real-time streams, archives, statistical analysis and more).

For convenience, we can provide aliases.

Some features and configuration options are account-based.


### Phoenix

Accounts may still be used for billing, customer support, etc. but are not needed anymore, as almost all previously namespaced resources have been promoted to first-class citizens, with universal unique identifiers.

Tasks that create, update, manage, supervise, etc. these resources are now namespaced. An arbitrary number of namespaces can be created for different purposes (such as user groups/roles, sandboxes for importing and modelling networks and feeds).



Users
=====

We don't roll out our own security, but use OAuth2 with Google Accounts. All (web)apps and APIs except public-facing ones require such an account (i.e. to perform various admin tasks, manage providers, supervise day-to-day activity, access archives and stats, edit the static transit information, etc.).


### Legacy

Users are assigned to accounts and pools (see below).


### Phoenix

Each user is granted access to a list of first-class resources (either directly, or preferably through a namespace).



Data providers
==============

Abstraction used for vehicle tracking.


Management
----------

### Legacy

Providers are grouped into pools (N:N relationship, but usually it's better, or at least simpler, to assign a provider to a unique pool. A provider without a pool will be inactive).

For best performance, pools should have less than 1000 providers, especially simultaneously active.

Some features and configuration options are pool-based.

Provider management APIs are designed to be used in the provider web dashboards.


### Phoenix

Providers are first-class citizens (each with a potentially distinct configuration). No more pools or limits.

For convenience, any number of providers can be grouped together to perform various admin/config tasks (via namespaces).



Zenbus Driver
-------------

Available on [Google Play](https://play.google.com/store/apps/details?id=com.byjoul.code.zenbus.tracking.android) (much preferred), or as an APK.

Currently each app connects directly via the "legacy" Provider API (see below for basic specs).


### Legacy setup

Kindly provide us with a list of IMEIs. Install the app on the devices. Et voilà ^^


### Phoenix setup

Same.



Zenbus "box"
------------

Some of our partners have developed dedicated hardware tracking modules. Pricing and specs available on demand.



Anything else
-------------

The outside world is very welcome to send data to Zenbus through the Provider API.

Geolocation data should not be older than 4 to 5 seconds for any vehicle (our own apps send updates every 3 seconds while moving).

The sampling rate should, of course, be higher (our own apps sample about 1 position per second, thus sending batches of about 3 positions when the vehicle is moving).

When the requirements are not met, most of the low latency "real-time" services will degrade, gracefully at first, then not-so gracefully.

The public-facing "legacy" services are especially affected by this (i.e. vehicles displayed in the public zenbus apps will stop being smoothly animated on the map, start jumping around a bit, and quickly won't be displayed at all, which we deem better than showing the public potentially misleading information).


### Legacy setup

We provide a fixed set or a range of provider ids.


### Phoenix setup

Same.



Zenbus Services
===============

Provider API
------------

### Legacy

    Endpoint: https://zenbus.net/provider/pool/<id>

    Protocol: POST over HTTPS

    Payload format: JSON

Bare-bones example:

    {
      "ns": "", //namespace/account identifier
      "id": "", //provider id
      "pos": [  //Geolocation data samples, using W3C Position interface
        {
          "timestamp":1234567890123
          "coords":{
            "latitude":12.345678,
            "longitude":-1.2345678
      }}]}

More data (such as position accuracy) and meta-data (such as trip selection) is usually expected, but not required.

Responses can be safely discarded for basic usage (they are used by the Zenbus Driver App, and subject to potentially breaking change), unless the API returns an error code.

You must use HTTPS, and treat provider id as a secret.


### Phoenix

The API is backwards-compatible, but:

* pool and namespace/account are no longer required,

* providers (may and should) have a numerical id,

and has additional features:

* batch updates about multiple providers,

* correct support for multiple providers per vehicle ("crowd-sourcing" ^^),

* optional protocol buffer implementation (can save bandwidth and increase performance, especially for server-to-server communication with heavy batches),

* more security options.



Live data processing
--------------------

We don't expect to open these internals to 3rd parties any time soon, but it can be useful to understand the basic flow of data while interacting with Zenbus.

1. forward incoming (raw) data to an archiving task as soon as it's received. At various later stages, processed data is also archived.

1. perform some basic deglitching of geolocation data, and enrich/filter requests based on context (stateful).

1. process vehicle positions (map-matching, trajectory monitoring, deviation detection).

1. assign vehicles to trips (auto-detection, disambiguation, sanity checks on "manually" declared trips).

1. update ETAs for monitored trips.

Inputs and outputs of these processes are sharded and cached, in order to make any data globally available as soon as it's updated (and ofc minimize concurrent writes).


### Legacy

The vast majority of provider requests will have been fully processed within 150 ms, and almost all in less than 1s.


### Phoenix

Early testing suggests that all updates will have been processed in less than 100 ms.

Provider requests are not left hanging until the the processing is finished, but immediately acknowledged or rejected (response depends both on request and provider config, server state, etc., but the most basic response has an empty body and 200 status code).



Low latency polling APIs
------------------------

The "real-time" APIs power the [Android][zenbus-android], [iOS][zenbus-ios] and [web][zenbus-web] apps. More data and streams are available through secure endpoints, when authenticated.


### Legacy

Public endpoint

    http://zenbus.net/poll/<account>

used by the

* [Android][zenbus-android],

* [iOS][zenbus-ios],

* and [web][zenbus-web] apps,

and is available for public/open consumption.

Details in the separate "Zenbus Legacy Cheatsheet" (data should be filtered at least by pool, can be filtered by route).

Quick note: only vehicles with an assigned trip appear in the responses. When their trajectory is matched to a shape, only the matched positions appear in the response. If you need live data for all vehicles, always including raw positions, you should poll one of the secure endpoints.


### Phoenix

More polling formats, endpoints and filters.

In addition to the legacy format and a new idiosyncratic format, GTFS-RT and SIRI (SIRI-lite in JSON format) services can be made available.



Transit network planning/modelling
----------------------------------

Set of secure (OAuth2 / Google Accounts) webapps and APIs.

### Legacy

Tbh this set of tools, although comprehensive, is not really polished and only half-suited to external users. APIs are especially idiosyncratic, and workflows that include 3rd party tools should be double-checked before integration.

Usually a Zenbus team manages the initial modelling while setting up the account. Updates are part of the support packages.


### Phoenix

Webapps and APIs are much more PEBCAK-proof.

* Full and proper GTFS import and export, [OneBusAway][OBA] compatibility.

* Data versioning, drafts, sandbox, publishing process.

* On-going effort to import/export from/to easily shareable 3rd party tools (timetables to google sheets, stops, shapes and itineraries to google maps, for instance).

Note about public feeds and their static transit information: all entities are first-class citizens. Each id refers to exactly one published state/version (frozen in time). This streamlines archives analysis and prevents many ambiguities.



Discovery services
------------------

### Legacy

"Discovery APIs" are available both for listing public feeds and their static transit information (you can GET data over HTTP and HTTPS in JSON format, and compatible entities in the GTFS text format).

Details in the separate "Zenbus Legacy Cheatsheet".


### Phoenix

Same as for live, we add a cleaner zenbus format and SIRI discovery services.



Archives and statistical analysis
---------------------------------

We store and make available :

* raw geolocation traces for all providers,

* a log of server events for all providers (including live trip assignment),

* daily consolidated timetables (with deltas comparing actual to expected stop times),

* passenger counts (from the Zenbus Driver app) if the option is enabled,

* more.

### Legacy

Available for viewing and export through secure web dashboards.


### Phoenix

Complex query tool under review.



[CC BY 4.0]: https://creativecommons.org/licenses/by/4.0/
[GAE]: https://cloud.google.com/docs/
[GTFS]: https://developers.google.com/transit/gtfs/reference/
[GTFS-RT]: https://developers.google.com/transit/gtfs-realtime/reference/
[SIRI]: https://en.wikipedia.org/wiki/Service_Interface_for_Real_Time_Information
[AVL]: https://en.wikipedia.org/wiki/Automatic_vehicle_location
[PIS]: https://en.wikipedia.org/wiki/Passenger_information_system
[OBA]: https://onebusaway.org/
[zenbus]: http://www.zenbus.fr/
[zenbus-android]: https://play.google.com/store/apps/details?id=com.byjoul.code.zenbus.android
[zenbus-ios]: https://itunes.apple.com/fr/app/zenbus/id808231328
[zenbus-web]: http://zenbus.net/saintjeansurrichelieu "A public transit network in Canada, near Montreal"