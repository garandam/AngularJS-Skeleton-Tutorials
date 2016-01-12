var gulp = require('gulp-help')(require('gulp'));
var paths = require('./gulp.config.json');

var browserSync = require('browser-sync').create();
var del = require('del');
var plug = require('gulp-load-plugins')();

var port = process.env.PORT || 7203;
var log = plug.util.log;


/**
 * Remove all files from the build folder
 * One way to run clean before all tasks is to run
 * from the cmd line: gulp clean && gulp build
 * @return {Stream}
 */
gulp.task('clean','Remove all files from the build folder', function() {
    var delPaths = [].concat(paths.build);
    del(delPaths);
});

/**
 * Serve the DEV environment
 */
gulp.task('serve-dev','Serve the DEV environment', function() {
    serve({
        mode: 'dev'
    });
});

/**
 * Serve the BUILD environment
 */
gulp.task('serve-build','Serve the BUILD environment', function() {
    serve({
        mode: 'build'
    });
});

/**
 * Build the optimized app
 * @return {Stream}
 */
gulp.task('build', 'Building the optimized app', ['inject'], function() {});

/**
 * Inject all the files into the new index.html
 * @return {Stream}
 */
gulp.task('inject', false, ['vendorcss', 'vendorjs', 'js'], function() {

    var minified = paths.build + '**/*.min.*';
    var index = paths.client + 'index.html';
   
    var stream = gulp.src([].concat(minified, index)) // add all built min files to index.html
    .pipe(inject('content/vendor.min.css', 'inject-vendor'))
    .pipe(inject('vendor.min.js', 'inject-vendor'))
    .pipe(inject('all.min.js'))
    .pipe(gulp.dest(paths.build)) // write the files


    function inject(path, name) {
        var pathGlob = paths.build + path;
        var options = {
            ignorePath: paths.build.substring(1),
            read: false
        };
        if (name) {
            options.name = name;
        }
        return plug.inject(gulp.src(pathGlob), options);
    }
});


/**
 * Bundling, minifying, and copying the app's JavaScript
 * @return {Stream}
 */
gulp.task('js', false, ['templatecache'],function() {

    var source = [].concat(paths.js, paths.build + 'templates.js');
    return gulp
        .src(source)
        .pipe(plug.concat('all.min.js'))
        .pipe(plug.ngAnnotate({
            add: true,
            single_quotes: true
        }))
        .pipe(plug.bytediff.start())
        .pipe(plug.uglify({
            mangle: true
        }))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build));
});


/**
 * Creating an AngularJS $templateCache from the html templates
 * @return {Stream}
 */
gulp.task('templatecache', false,function() {

    return gulp
        .src(paths.htmltemplates)
        .pipe(plug.bytediff.start())
        .pipe(plug.htmlmin({
        	collapseWhitespace: true
        }))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(plug.angularTemplatecache('templates.js', {
            module: 'app',
            standalone: false,
            root: 'app/'
        }))
        .pipe(gulp.dest(paths.build));
});


/**
 * Bundling, minifying, and copying the Vendor JavaScript
 * @return {Stream}
 */
gulp.task('vendorjs', false, function() {

	//var vendorFilter = plug.filter(['**/*.js']);

    return gulp.src(paths.vendorjs)
    	//.pipe(vendorFilter)
        .pipe(plug.concat('vendor.min.js'))
        .pipe(plug.bytediff.start())
        .pipe(plug.uglify())
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build));
});


/**
 * Minify and bundle the Vendor CSS
 * @return {Stream}
 */
gulp.task('vendorcss', false, function() {

    //var vendorFilter = plug.filter(['**/*.css']);

    return gulp.src(paths.vendorcss)
        //.pipe(vendorFilter)
        .pipe(plug.concat('vendor.min.css'))
        .pipe(plug.bytediff.start())
        .pipe(plug.minifyCss({}))
        .pipe(plug.bytediff.stop(bytediffFormatter))
        .pipe(gulp.dest(paths.build + 'content'));
});


/**
 * Start the node server using nodemon.
 * @param  {Object} args
 * @return {Stream}
 */
function serve(args) {
    var options = {
        script: paths.server + 'server.js',
        delayTime: 1,
        env: {
            'NODE_ENV': args.mode,
            'PORT': port
        },
        watch: [paths.server]
    };

    return plug.nodemon(options)
        .on('start', function() {
        })
        .on('restart', function() {
            log('restarted!');
        });
}

/**
 * Formatter for bytediff to display the size changes after processing
 * @param  {Object} data - byte data
 * @return {String}      Difference in bytes, formatted
 */
function bytediffFormatter(data) {
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

/**
 * Format a number as a percentage
 * @param  {Number} num       Number to format as a percent
 * @param  {Number} precision Precision of the decimal
 * @return {String}           Formatted percentage
 */
function formatPercent(num, precision) {
    return (num * 100).toFixed(precision);
}
