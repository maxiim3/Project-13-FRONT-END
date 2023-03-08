# Connect a bank API to a React app

Projet 13 Openclassrooms

## Installation

### Back-end / API

- [Clone the back end repo](https://github.com/maxiim3/Project-13-Bank-API)
- Follow instructions on the README.md

### Front-End

Clone the repo and install it using npm

```bash
  npm i
```

Launch the server using

```bash
  npm run dev
```

### Connect to the user profile

Refer to the back-end repo `/server/scripts/pupulateDB.js` to get the user credentials for authentication.

## Configuration

All the paths (App router and API) are configured in the `src/config.json` file.
The default port for the API is `3000`.

## Project structure

- `src` contains all the source code
- `src/main.ts` is the entry point of the app
- `src/config.json` all the configuration of the app: API path, App router path, etc.
- `src/types` contains all the typescript types and proptypes

### React

- `src/components` contains all the React components
- `src/container` contains all the React components that encapsulate logic, state and children components
- `src/functions` contains all the functions and utilities
- `src/hooks` contains all the custom hooks
- `src/pages` contains all the React components that are pages / screens

### Stylesheet

- `src/sass` contains all the sass modules
- `src/shared` contains the normalize.css and the global styles
- `src/main.scss` is the global stylesheet loaded in `src/main.ts`

### API Service

- `src/mocks` contains all the mocks for the API
- `src/service` contains all the API service (Axios)

### Redux Store

- `src/store` contains all the Redux store

### Router

- `src/routes` contains all the routes of the app
