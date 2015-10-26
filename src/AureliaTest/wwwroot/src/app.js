System.register(["aurelia-framework", "aurelia-fetch-client"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, aurelia_fetch_client_1;
    var App;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(http) {
                    console.log(http);
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
                App = __decorate([
                    aurelia_framework_1.autoinject, 
                    __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map