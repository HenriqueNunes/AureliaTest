import {RouterConfiguration, Router} from "aurelia-router"
import {autoinject} from "aurelia-framework"
import {HttpClient} from "aurelia-fetch-client"

@autoinject
export class App {
    router: any;

    constructor(http: HttpClient) {
        console.log(http);
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia test';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
        ]);

        this.router = router;
    }
}