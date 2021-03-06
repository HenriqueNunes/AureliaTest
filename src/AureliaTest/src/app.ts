import {RouterConfiguration, Router} from "aurelia-router"

export class App {
    router: any;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia Test';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: 'pages/welcome/index', nav: true, title: 'Welcome' },
            { route: 'users', name: 'users', moduleId: 'pages/users/index', nav: true, title: 'Github Users' },
            { route: 'child-router', name: 'pages/child-router/index', moduleId: 'child-router', nav: true, title: 'Child Router' }
        ]);

        this.router = router;
    }
}