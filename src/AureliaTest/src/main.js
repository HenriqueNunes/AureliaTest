System.register(["bootstrap"], function(exports_1) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature("resources")
            .developmentLogging();
        //Uncomment the line below to enable animation.
        //aurelia.use.plugin('aurelia-animator-css');
        //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
        //aurelia.use.plugin('aurelia-html-import-template-loader')
        aurelia.start().then(function (a) { return a.setRoot(); });
    }
    exports_1("configure", configure);
    return {
        setters:[
            function (_1) {}],
        execute: function() {
        }
    }
});
//# sourceMappingURL=main.js.map