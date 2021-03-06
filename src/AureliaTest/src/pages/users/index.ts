import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Users {
    heading = 'Github Users';
    users = [];
    http: HttpClient;

    constructor(http: HttpClient) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('https://api.github.com/');
        });

        this.http = http;
    }

    activate() {
        return this.http.fetch('users')
            .then(response => response.json())
            .then(users => this.users = users);
    }
}
