DERP (Daily Events Random Planner)
=====================

## Project Description

Tired of planning for what to do for the weekends? Arguing with your SO/friends about where to go for dinner? Wonder what events to attend in your area? Look no further than the Daily Events Random Planner (DERP). DERP is a full-stack social web application that helps users plan their day(s) based on their location and provided filters. This can solve the simple social conflicts between individuals as well as creating a shared online experience and promoting offline social experience; while matching the increased pace of living of the modern society.

## Tech Stack Used

- React
- Ruby on Rails
- PostgreSQL

### APIs Used

- Google Maps API
- International Showtimes API
- Yelp Fusion API

## Contributors
- Nicola Metallo - https://github.com/NicolaMGH/
- Raymond Kwan - https://github.com/RayKayy
- Kelvin Kwon - https://github.com/kkwon39

### Getting Started

1. Clone this repo and install all dependencies.

```
$ git clone https://github.com/NicolaMGH/derp-react.git
$ cd into derp-react
$ run npm install
$ create a .env file using the .env.example file
```

2. Clone the server repo and install all dependencies.

```
$ go to https://github.com/NicolaMGH/derp-api-server
$ git clone https://github.com/NicolaMGH/derp-api-server.git
$ cd into derp-api-server
$ run bundle install
$ create a .env file using the .env.example file
```

3. Start and run the application:

```
$ cd into derp-react and run 'npm start'
$ cd into derp-api-server and run 'bin/rails s'
$ open browser to `http://localhost:8080/`
```
> The webpack may take some time to compile;

> The application default server address is *http://localhost:3000*;

### Features

- User is able to create an account and log in.
- Filter using event selection, start time, end time and location.
- Able to regenerate results.

### Final Product

#### Screenshot

!["landing-page"](https://github.com/RayKayy/derp-react/blob/master/docs/landing-page.png?raw=true)
!["main"](https://github.com/RayKayy/derp-react/blob/master/docs/main.png?raw=true)
!["itinerary"](https://github.com/RayKayy/derp-react/blob/master/docs/itinerary.png?raw=true)
!["resaurant"](https://github.com/RayKayy/derp-react/blob/master/docs/restaurant.png?raw=true)
!["movie"](https://github.com/RayKayy/derp-react/blob/master/docs/movie.png?raw=true)
!["map"](https://github.com/RayKayy/derp-react/blob/master/docs/map.png?raw=true)

### Dependencies

- axios: 0.18.0
- google-maps-react: 2.0.2
- http-proxy-middleware: 0.19.0
- moment: 2.22.2
- node-sass: 4.9.4
- prop-types: 15.6.2
- randomcolor: 0.5.3
- react: 16.5.2
- react-addons-css-transition-group: 15.6.2
- react-bootstrap: 0.32.4
- react-datetime: 2.16.2
- react-dom: 16.5.2
- react-geolocation: 1.0.4
- react-icons: 3.2.2
- react-loading: 2.0.3
- react-places-autocomplete: 7.2.0
- react-scripts: 2.0.5
- react-vertical-timeline-component: 2.3.1
