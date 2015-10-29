System.register([], function(exports_1) {
    var App;
    return {
        setters:[],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = 'Aurelia Test';
                    config.map([
                        { route: ['', 'welcome'], name: 'welcome', moduleId: 'pages/welcome/index', nav: true, title: 'Welcome' },
                        { route: 'users', name: 'users', moduleId: 'pages/users/index', nav: true, title: 'Github Users' },
                        { route: 'child-router', name: 'pages/child-router/index', moduleId: 'child-router', nav: true, title: 'Child Router' }
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