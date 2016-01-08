# AngularJS-Skeleton-Tut-1

A simple first AngularJS App with NodeJS

```
$ git clone https://github.com/garandam/AngularJS-Skeleton-Tutorials.git tutorials
$ cd tutorials/tut-1/
$ npm start
```

#### Client check
  Browse to `localhost:7200` redirect to `localhost:7200/#/`

#### Server check
  Browse to `localhost:7200/api/1/ping`

```
├── package.json                            // node dependencies
├── README.md                               // this instruction ;-)
└── src                                     // application and server code
    ├── client                              // application - AngularJS
    │   ├── app
    │   │   ├── app.module.js               // app module & routing
    │   │   └── welcome                     // feature welcome
    │   │       ├── welcome.html            // feature html
    │   │       ├── welcome.js              // feature controller
    │   │       └── welcome.module.js       // feature module
    │   └── index.html                      // app master page
    └── server                              // server - NodeJS
        ├── routes                          // API
        │   └── index.js                  
        └── server.js                       // server code
```