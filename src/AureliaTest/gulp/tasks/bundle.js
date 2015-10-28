var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
    force: true,
    packagePath: '.',
    bundles: {
        //"dist/app-github": {
        //    includes: [
        //        'users',
        //        'users.html!text'
        //    ],
        //    excludes: [
        //        'welcome',
        //        'main',
        //        'child-router',
        //        'blur-image',
        //        'app',
        //        'aurelia-bootstrapper',
        //        'aurelia-fetch-client',
        //        'aurelia-router',
        //        'aurelia-animator-css',
        //        'github:aurelia/templating-binding',
        //        'github:aurelia/templating-resources',
        //        'github:aurelia/templating-router',
        //        'github:aurelia/loader-default',
        //        'github:aurelia/history-browser',
        //        'github:aurelia/logging-console'
        //    ],
        //    options: {
        //        inject: true,
        //        minify: false
        //    }
        //},
        "dist/app-build": {
            includes: [
                '*',
                '*.html!text',
                '*.css!text',
                'bootstrap/css/bootstrap.css!text'
            ],
            excludes: [
                'aurelia-bootstrapper',
                'aurelia-fetch-client',
                'aurelia-router',
                'aurelia-animator-css',
                'github:aurelia/templating-binding',
                'github:aurelia/templating-resources',
                'github:aurelia/templating-router',
                'github:aurelia/loader-default',
                'github:aurelia/history-browser',
                'github:aurelia/logging-console'
            ],
            options: {
                inject: true,
                minify: true
            }
        },
        "dist/aurelia": {
            includes: [
                'aurelia-bootstrapper',
                'aurelia-fetch-client',
                'aurelia-router',
                'aurelia-animator-css',
                'github:aurelia/templating-binding',
                'github:aurelia/templating-resources',
                'github:aurelia/templating-router',
                'github:aurelia/loader-default',
                'github:aurelia/history-browser',
                'github:aurelia/logging-console'
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};

gulp.task('bundle', function () {
    return bundler.bundle(config);
});

gulp.task('unbundle', function () {
    return bundler.unbundle(config);
});
