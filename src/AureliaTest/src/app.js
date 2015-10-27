System.register([], function(exports_1) {
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = 'Aurelia test';
                    config.map([
                        { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                        { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                        { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
                    ]);
                    this.router = router;
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map