---
title: "Zenbus Provider APIs"
author: "Lionel Delourme"
date: '2018-09-24'
license: CC BY 4.0
version: draft
---

# Concepts

Skip this section if you already know this stuff, or simply don't care.

## Legacy, Phoenix

By default, you should assume the documentation is about the Phoenix version of the remote services, which is still in "shadow deployment" at the time of writing.

Where and when needed, we detail in what ways the "legacy" services and APIs differ.

## Provider

We use the very generic term "provider" for any source that :

- can be reliably identified (thus enabling a sufficient level of security for the purposes of the API) ;

- can send us geolocation data about a vehicle (at the very least).

### Provider examples

#### Our own Android Zenbus Driver app

More about it in the next sections.

#### Zenbus "boxes"

Some hardware components directly send us HTTP requests, by implementing the API.

#### An external server

Additional security features, streamable and batch APIs (atm not detailed here)...

## Realtime data lifecycle

All the data in the system is sharded, allowing us to commit each piece of information (each partial update) as soon as it's available. We support a shitload of concurrent writes (updates), and a virtual infinity of concurrent reads.

Each new input (geolocation or metadata) will provoke a cascade of tasks in charge of these updates. This cascade is finished well under 100ms in the vast majority of the cases, and always under 1s (we'll release detailed stats after the shadow deployment period).

### Provider service

This might be both too much and too little information (we welcome feedback!), but we think a basic understanding of the whole process might be helpful for everyone involved.

1. Trivial validation (rejects malformed/incomplete data, unknown protocols, etc.), sanity checks, IP throttling...
1. Authentification and provider to vehicle mapping.
1. Update current vehicle policy (if needed and permitted ofc - this is discussed below).
1. Preprocessing of geolocation data (de-glitching, adjusting timestamps, some sampling and basic trajectory analysis)...
1. Preprocessing of map matching tasks (retrieves indexed geographical meta-data of interest, relative to current trajectory and policy)...
1. Preprocessing trip assignment tasks (retrieves transit network meta-data of interest, with the same constraints)

The service has an API, and this is its documentation. ^^

### Map matching service



### Trip Assignment service



### Polling service

Our SIRI implementation (will) have its own documentation. Same for GTFS and GTFS-RT. Etc.

## Vehicle policy

This is our current in-house term for whatever the hell a vehicle should or is supposed to be doing at a given moment.

We make a further distinction between the current "real-time" policy and a persistent policy configuration that constrains the previous and provides a reasonable default (but can also be edited in real-time).

This is one of the cases where examples are better at defining a concept:

### AUTO

The "default no-policy policy by default". Empowered by unspeakable rituals of unfathomable darkness, our algorithms will automagically divine what is happening, i.e. assign a trip to the vehicle (or assume deadheading if no trip).

Machine learning might be involved. Some consensual adhockery among adults too.

### DEADHEADING

[It](https://en.wikipedia.org/wiki/Dead_mileage) happens, and it's useful to know when.

### RESTRICTED AUTO

Same as auto, but hypotheses are constrained to a subset (through configuration, or explicit declaration).

* When pre-configured (in the persistent policy), the usual method is to define a subset of [lines](#line) in a workspace (more about workspaces in a separate document).

* The current policy may (and usually is) modified in real-time (either by the driver or a supervisor performing an action, or some automated system triggering). The simplest and most usual choices are :

  * either one specific [line](#line),

  * or one specific [mission](#mission).

### TRIP OVERRIDE

This policy is (should) never be configured, but only declared in real-time. Quite obviously it will force our algorithms to pick one and only one hypothesis and assign the resulting trip to the vehicle.

We may still reject it when it's really inconsistent.

# Zenbus Driver App (Android only)

## Getting started

Get the APK or [install](https://play.google.com/store/apps/details?id=com.byjoul.code.zenbus.tracking.android)

Launch the app once to give it required permissions, check that your device is registered, etc. More info [here](http://doc.zenbus.fr/driver/introduction.html).

The app can run "in the background" as a service, with a very simple API, using [explicit intents](https://developer.android.com/guide/components/intents-filters).

## Snippets

These are pretty self-explanatory, you can use/adapt them in your Android app.

### DEADHEAD_STARTED

    // Start or resume tracking (vehicles usually start while deadheading),
    // i.e. we'll automatically collect and send geolocation data to our cloud services, properly syncing states, etc.
    // Any trip you had started will be implicitly finished or canceled.

    Intent zenbusIntent = new Intent("com.byjoul.code.zenbus.tracking.android.intent.action.DEADHEAD_STARTED");
    zenbusIntent.setComponent(new ComponentName(
      "com.byjoul.code.zenbus.tracking.android",
      "net.zenbus.android.tracking.ProviderService"));
    startService(zenbusIntent);

### DEADHEAD_FINISHED

    // Stop tracking

    Intent zenbusIntent = new Intent("com.byjoul.code.zenbus.tracking.android.intent.action.DEADHEAD_FINISHED");
    zenbusIntent.setComponent(new ComponentName(
      "com.byjoul.code.zenbus.tracking.android",
      "net.zenbus.android.tracking.ProviderService"));
    startService(zenbusIntent);

### TRIP_STARTED

See [GTFS reference](https://developers.google.com/transit/gtfs/reference/) for extras (technically all are optional, but the more you provide, the more accurate our guess will be).

If you provide no information at all, we'll run in "full-auto" mode (the vehicle will be publicly visible when assigned to a reasonable best guess).

    // Start trip (tracking will start if needed)

    Intent zenbusIntent = new Intent("com.byjoul.code.zenbus.tracking.android.intent.action.TRIP_STARTED");
    zenbusIntent.setComponent(new ComponentName(
      "com.byjoul.code.zenbus.tracking.android",
      "net.zenbus.android.tracking.ProviderService"));

    //String tripId in trips.txt and stop_times.txt
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.TRIP_ID", tripId);

    //serviceId, tripHeading, tripShortName in trips.txt
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.SERVICE_ID", serviceId);
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.TRIP_HEADSIGN", tripHeadsing);
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.TRIP_SHORT_NAME", tripShortName);

    //String stopId, stopName, departureTime in stop_times.txt
    //(from line with the smallest stop_sequence corresponding to the trip_id)
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.STOP_ID", stopId);
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.STOP_NAME", stopName);
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.DEPARTURE_TIME", departureTime);

    //String routeId in trips.txt (and in routes.txt for more info)
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.ROUTE_ID", routeId);

    //String routeLongName, routeShortName in routes.txt
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.ROUTE_LONG_NAME", routeLongName);
    zenbusIntent.putExtra("com.byjoul.code.zenbus.tracking.android.intent.extra.ROUTE_SHORT_NAME", routeShortName);

    startService(zenbusIntent);

### TRIP_FINISHED

    // Finish trip (calling DEADHEAD_STARTED is valid but redundant after this)

    Intent zenbusIntent = new Intent("com.byjoul.code.zenbus.tracking.android.intent.action.TRIP_FINISHED");
    zenbusIntent.setComponent(new ComponentName(
      "com.byjoul.code.zenbus.tracking.android",
      "net.zenbus.android.tracking.ProviderService"));

    // TODO Put the same extras (consistency checks)

    startService(zenbusIntent);

## Helper class (mini-lib)

Let's not call it an SDK, shall we?

//TODO github link with more examples and details

# Legacy HTTP POST API

__This API might change unexpectedly or self-destruct with high prejudice and no warning. Use at your own risk!__

## Minimal Example

    Endpoint: https://zenbus.net/provider/
              // This endpoint may work in some cases but you still need to check with us first.
              // It's better not to use it.

              https://zenbus.net/provider/pool/123456789
              // "pool/123456789" will obviously not work.
              // Contact us, we'll provide you with the actual endpoint.

Send the data as a POST request (application/JSON, UTF-8, the usual) with a body that looks like:

    {
     "id": "", // Provider id as a JSON String, obviously required.
     "pos": [  // Geolocation data samples, using W3C Position interface. Optional, but kinda the whole point.
       {
         "timestamp":1234567890123,
         "coords":{
           "latitude":12.345678,
           "longitude":-1.2345678
     }}]
    }

This is the simplest valid way to send us geolocation data. It will use defaults for everything, i.e. most probably the AUTO policy. It will work.

## Start of work day

Such a request is valid, and will let us know that the vehicle "is out there":

    {
     "id": "",
     "m": 11, // Required while the vehicle is deadheading
     "events": [
       {
         "t":  1234567890123,  //Timestamp
         "what": 1082     //DEADHEAD_STARTED
       }
     ]
    }

Note that the same request will implicitly terminate any current trip assignment (by either canceling the assignment and making the trip available again, or declaring the trip finished, and thus unavailable for any vehicle).

This request has no positions: it is valid, but we strongly encourage you to batch calls.

This request introduces the "m" attribute. It is a mask, used as a kind of stateless checksum, and should depend on the latest (stateful) policy event. More on that below.

## Start of trip

    {
     "id": "",
     "pos": [
       {
         "timestamp":1234567890123,
         "coords":{
           "latitude":12.345678,
           "longitude":-1.2345678
     }}],
     "m": 16,  // Required while the vehicle is on a specific ("declared", "manually assigned") trip
     "events": [
       {
         "t":  1234567890123,
         "what": 106,     //TRIP_STARTED
         "data": "{\"tripId\":\"xxx\",\"departureTime\":\"HH:mm:ss\",\"yymmdd\":180924}" // Stringified JSON data
       }
     ]
    }

Note the mask has changed from 11 to 16 (consistent with the event code).

The event now contains additional data. For legacy reasons, instead of being a JSON object, it must be stringified. Here it contains only the required data, but you should always include as much information as possible to allow the system to degrade gracefully (before defaulting to the AUTO policy, we should be able to try less and less specific AUTO_RESTRICTED modes).

This is the last example.

## Consistency mask ("m")

Must be sent with each request, unless you want to default to the AUTO policy (which has the m = 0 mask, that may be omitted).

It's a mask (JSON number)

    FLAG_INVISIBLE = 1;             // Hide the vehicle from the general public.
    FLAG_DO_NOT_MATCH = 2;          // Disable map-matching and deviation monitoring.
    FLAG_TRIPS_RESTRICTED = 4;      // Not a specific trip, but a subset of hypotheses
    FLAG_DO_NOT_ASSIGN_TRIP = 8;    //disable trip assignment (vehicle is "roaming")
    FLAG_TRIP_OVERRIDE = 16;        // A specific trip

Usual values:

* 0 (AUTO default, may be omitted),
* 11 (while deadheading, the vehicle won't appear on public feeds and may not be assigned, the positions are only archived),
* 16 (on a specific trip, no fallback),
* 4 (on a trip, but the provider doesn't know which one exactly),
* 20 (on a specific trip, enough information is provided to devise a fallback strategy in case the trip may not be assigned)

## Event codes ("what")

JSON number

    GTFS_TRIP_STARTED = 106;    // Expected mask is either 4, 16 or 20, depending on the data content.
    GTFS_TRIP_FINISHED = 107;   // Expected mask is 11.
    DEADHEAD_STARTED = 1082;    // Expected mask is 11.
    DEADHEAD_FINISHED = 1083;

## Event data ("data")

Fill as much as possible and set the mask accordingly (ideally fill everything and always use 20):

    {
      // GTFS references
      "stopId": "", //Departure
      "tripId": "",
      "shapeId":"",
      "routeId": "",
      "serviceId": "",

      // GTFS fields
      "stopName": "",
      "tripHeadsign": "",
      "tripShortName": "",
      "departureTime": "HH:mm:ss",
      "routeLongName": "",
      "routeShortName": "",

      // "JTFS"
      "lineId": "", //alias for routeId
      "itineraryId": "",
      "missionId": ""
    }

More fields will be supported _soon (tm)_.

Don't forget to stringify it!

## Event Timestamp

UTC

# Too much information about...

## GTFS vs Transmodel/SIRI

There should (and will be) at least a blog-post and maybe a full-fledged document/rant about transit standards... This will suffice for now.

We half-jokingly call our take on all that "JTFS" (Just a Transit Feed Specification, ofc).

### Line

The same concept is called [line] in Transmodel/SIRI and [route] in GTFS. Since there are also "Routes" in SIRI, which could lead to some hilarious ambiguity, we prefer the term "Line".

[route]: https://developers.google.com/transit/gtfs/reference/#routestxt
[line]: http://www.transmodel-cen.eu/tutorials/network-description/

### Mission

GTFS does have the concept of "stop sequence" (as a simple field), but there is no grouping of [trips][trip] by stop sequence (thus they would differ in only the actual [arrival and departure times][stop times]).

Transmodel/SIRI calls this a [journey pattern] which is explicit but can be a mouthful.

In our case, since we kept the "trip" terminology, it should have been renamed "trip pattern", but we chose "mission", mainly because it's shorter.

[trip]: https://developers.google.com/transit/gtfs/reference/#tripstxt
[stop times]: https://developers.google.com/transit/gtfs/reference/#stop_timestxt
[journey pattern]: http://www.transmodel-cen.eu/tutorials/network-description/

### Itinerary and shape

There is a concept in Transmodel/SIRI, missing from GTFS, unfortunately called "Route" (ambiguity ftw). If it contained some actual geographical information, it could map to the GTFS concept of [shape], provided this concept contained some actual network information (such a stops you pass by without stopping).

What we call a shape differs from these in two important ways:

* "JTFS" shapes have a sequence of stops "anchored" to them, whether vehicles stop there or not (the "anchor" is not a set of latitude/longitude coordinates, but rather the distance traveled from the start of the shape, which maps conveniently to the GTFS field used in [stop times]).

* "JTFS" itineraries can have branches. The easiest definition would be "the leftmost column of an old-school timetable". We know that branches have some awful properties (no vehicle irl will ever move along the itinerary as defined), but they have a very nice one (you can easily get all the stops _from which_ you can go to some destination).

[shape]: https://developers.google.com/transit/gtfs/reference/#shapestxt

### Trip


### Relationships

Strict 1:N hierarchical

1. Line (GTFS [route] and SIRI [line])
1. Itinerary (leftmost column of a timetable)
1. Shape (both and neither GTFS [shape] and SIRI route)
1. Mission (SIRI [journey pattern])
1. Trip
