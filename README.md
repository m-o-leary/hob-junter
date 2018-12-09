This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Specification

Create a single page application using the dataatwork.org open API

API Documentation
https://any-api.com/dataatwork_org/dataatwork_org/docs/API_Description

## Requirements
This app should contain two views:
    1. Job search view
        This should be the default view and should be comprised of:
        - An autocomplete search box which allows the user to search for job titles by keyword(s)
        - A list of search results for any given search
        - Clicking on a result should bring the user to the corresponding details view
    2. Job details view
        Each job detail view should have a unique addressable URL and should display job details such as:
        - Job title
        - Top 5 related jobs
        - Top 10 related skills

## Deliverables
    1. A URL to a publicly available source code repository on Github (this repo) 
    2. A URL to the publicly available final build on Github pages, AWS S3 or a similar service

## Project structure

Project will use `redux` for state management in addition to `react-router` for routing to both views.
The actions, reducers and store directories are all boilerplate for redux.


The sagas directory is included as `react-saga` will be used to make for better async manmagement store management
The selectors directory is included as the project will use `reselect` to avoid unecessary expensive re rendering of the application

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.js
    ├── App.test.js
    ├── actions
    │   ├── job.js
    │   └── search.js
    ├── components
    │   ├── JobDetail.jsx
    │   └── Search.jsx
    ├── containers
    │   ├── JobPage.jsx
    │   └── SearchPage.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reducers
    │   ├── index.js
    │   ├── job.js
    │   └── search.js
    ├── sagas
    ├── selectors
    ├── serviceWorker.js
    ├── store
    │   └── configureStore.js
    └── utils
        ├── theme.js
        └── types.js
```