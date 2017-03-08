# react_redux_express_starter_kit
Simple React, Redux, Express, Webpack starter Kit


Starter kit includes:
* Babel with ES6
* React
* Redux
* Immutable
* Webpack
* Webpack-dev-server with HMR
* Chrome Redux DevTools
* Eslint
* Proxy already set to API calls

To run webpack-dev-server with HMR:
```
yarn run dev // localhost:3030
```

To run server:
```
yarn run dev-server
```
Server starts with nodemon. Any change on server files will reload server.
Server listens on port 3000.
All API server calls should be prefixed by ``` /api/ ```

To build dist and start server:
```
yarn run start
```

To build dist:
```
yarn run build
```

Starter Kit webpack cnofig and createing redux store based on repository: https://github.com/DimitriMikadze/express-react-redux-starter
