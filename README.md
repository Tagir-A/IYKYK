# Picsart

An SPA requested by picsart.
This is a very rough app with barely any styles, just to showcase main app building skills.

Main idea: 'Less is more'.
There was no need to use state management, no need to customize webpack. Instead, I've spent time adding tests and making sure that structure doesn't require `useMemo` or `useCallback`.

In general, that's my philosophy. I don't bring unnecessary complexity, cause there is always maintenance cost.

## Hosting

The demo is hosted on Netlify: https://jazzy-conkies-68aed4.netlify.app

## Main Technologies

- CRA (suggested)
- React-Router (required)

I'd probably use Next.js to build something bigger then a TODO list, since complexity grows very fast and having a foundation is exactly why we use frameworks and meta-frameworks.

In this case, CRA was suggested and honestly, it was enough to cover most of requirements (since CRA is not as bare-bones as it used to be).

`react-slide-routes` is used for animations between route changes as an easy addition to `react-router`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run analyze`

Shows an analyze of code chunks made for production.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
