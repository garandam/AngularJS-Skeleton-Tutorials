# AngularJS-Skeleton-Tut-1

A simple first AngularJS App with NodeJS

#### Pre Tasks
```
$ npm install -g bower
$ npm install -g gulp
$ npm install -g nodemon
```

#### Lets start
```
$ git clone https://github.com/garandam/AngularJS-Skeleton-Tutorials.git tutorials
$ cd tutorials/tut-2/
$ bower install
$ npm install
$ npm start

Try:
$ gulp help
$ gulp build
$ gulp clean
$ gulp serve-dev
$ gulp serve-build
```

#### Client check
  Browse to `localhost:7203` redirect to `localhost:7203/#/`

#### Server check
  Browse to `localhost:7203/api/1/ping`

```
├── .bowerrc
├── bower.json 								// bower dependencies
├── gulpfile.js 							// gulp tasks
├── gulp.config.js 							// gulp config with a few pathes
├── package.json                            // node dependencies
├── README.md                               // this instruction ;-)
├── build 									// application code ready to deploy
│   ├── all.min.js 							// app module, controller, templatecache
│   ├── content
│   │   └── vendor.min.css 					// vendor css
│   ├── index.html 							// app master page with injects
│   ├── templates.js 						// templatecache
│   └── vendor.min.js 						// vendor js
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

## What have I do behind

#### Create a few files:
- `.bowerrc`
- `bower.json`
- `gulp.config.js`
- `gulpfile.js`

Change `index.html` with in `src-Folder` with `<!-- inject comments -->`

#### npm tasks
```
$ npm install -g bower
$ npm install -g gulp

// --save-dev ==> add dependencies to the `package.json` 
$ npm install --save-dev gulp
$ npm install --save-dev gulp-help
$ npm install --save-dev del
$ npm install --save-dev gulp-concat
$ npm install --save-dev gulp-uglify
$ npm install --save-dev gulp-bytediff
$ npm install --save-dev gulp-load-plugins
$ npm install --save-dev gulp-inject
$ npm install --save-dev gulp-util
$ npm install --save-dev gulp-filter
$ npm install --save-dev gulp-minify-css
$ npm install --save-dev gulp-ng-annotate
$ npm install --save-dev gulp-angular-templatecache
$ npm install --save-dev gulp-minify-html

// Server config & dependencies
$ npm install -g nodemon
$ npm install --save-dev gulp-nodemon
```

### Read
[gulp-help](https://www.npmjs.com/package/gulp-help)
[del](https://www.npmjs.com/package/del)
[gulp-concat](https://www.npmjs.com/package/gulp-concat)
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
[gulp-bytediff](https://www.npmjs.com/package/gulp-bytediff)
[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins)
[gulp-inject](https://www.npmjs.com/package/gulp-inject)
[gulp-util](https://www.npmjs.com/package/gulp-util)
[gulp-filter](https://www.npmjs.com/package/gulp-filter)
[gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
[gulp-ng-annotate](https://www.npmjs.com/package/gulp-ng-annotate)
[gulp-angular-templatecache](https://www.npmjs.com/package/gulp-angular-templatecache)
[gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html)
[gulp-nodemon](https://www.npmjs.com/package/gulp-nodemon)

### Difference between `npm and Bower`
The main difference between npm and Bower is the approach for installing package dependencies. `npm` installs dependencies for each package separately, and as a result makes a big package dependency tree (`node_modules/grunt/node_modules/glob/node_modules/...`), where there could be several version of the same package. For client-side JavaScript this is unacceptable: you can't add two different version for jQuery or any other library to a page. With `Bower` each package is installed once (jQuery will always be in the `bower_components/jquery` folder, regardless of how many packages depend on it) and in the case of a dependency conflict, `Bower` simply won't install the package incompatible with one that's already installed.

Quoting from [Bower: Why Front-End Needs a Package Manager](http://frontendbabel.info/articles/bower-why-frontend-package-manager/#why-not-npm)
