import {computedFrom} from 'aurelia-framework';
import {autoinject} from "aurelia-framework"
import {HttpClient} from "aurelia-fetch-client"
import 'fetch';

@autoinject
export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;

    values = ["Hello", "World!"];

    private http: HttpClient;

    constructor(http: HttpClient) {
        http.configure(config=>
            config
                .useStandardConfiguration()
                .withBaseUrl("api/"));

        this.http = http;
    }

    //Getters can't be directly observed, so they must be dirty checked.
    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
    //To optimize by declaring the properties that this getter is computed from, uncomment the line below
    //as well as the corrresponding import above.
    @computedFrom('firstName', 'lastName')
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
    }

    canDeactivate() {
        if (this.fullName !== this.previousValue) {
            return confirm('Are you sure you want to leave?');
        }
    }

    activate() {
        return this.http.fetch('values')
            .then(response => response.json())
            .then(values => this.values = values);
    }
}
