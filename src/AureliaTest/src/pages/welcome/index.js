System.register(['aurelia-framework', "aurelia-framework", "aurelia-fetch-client", 'fetch'], function(exports_1) {
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
    var aurelia_framework_1, aurelia_framework_2, aurelia_fetch_client_1;
    var Welcome;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_framework_2_1) {
                aurelia_framework_2 = aurelia_framework_2_1;
            },
            function (aurelia_fetch_client_1_1) {
                aurelia_fetch_client_1 = aurelia_fetch_client_1_1;
            },
            function (_1) {}],
        execute: function() {
            Welcome = (function () {
                function Welcome(http) {
                    this.heading = 'Welcome to the Aurelia Navigation App!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.previousValue = this.fullName;
                    this.values = ["Hello", "World!"];
                    http.configure(function (config) {
                        return config
                            .useStandardConfiguration()
                            .withBaseUrl("api/");
                    });
                    this.http = http;
                }
                Object.defineProperty(Welcome.prototype, "fullName", {
                    //Getters can't be directly observed, so they must be dirty checked.
                    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
                    //To optimize by declaring the properties that this getter is computed from, uncomment the line below
                    //as well as the corrresponding import above.
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Welcome.prototype.submit = function () {
                    this.previousValue = this.fullName;
                    alert("Welcome, " + this.fullName + "!");
                };
                Welcome.prototype.canDeactivate = function () {
                    if (this.fullName !== this.previousValue) {
                        return confirm('Are you sure you want to leave?');
                    }
                };
                Welcome.prototype.activate = function () {
                    var _this = this;
                    return this.http.fetch('values')
                        .then(function (response) { return response.json(); })
                        .then(function (values) { return _this.values = values; });
                };
                Object.defineProperty(Welcome.prototype, "fullName",
                    __decorate([
                        aurelia_framework_1.computedFrom('firstName', 'lastName'), 
                        __metadata('design:type', Object)
                    ], Welcome.prototype, "fullName", Object.getOwnPropertyDescriptor(Welcome.prototype, "fullName")));
                Welcome = __decorate([
                    aurelia_framework_2.autoinject, 
                    __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
                ], Welcome);
                return Welcome;
            })();
            exports_1("Welcome", Welcome);
        }
    }
});
//# sourceMappingURL=index.js.map