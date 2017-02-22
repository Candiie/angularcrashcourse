import { Component } from '@angular/core';

@Component({
    selector: 'my-app',   //this is what u write in html <my-app>
    // template: `<user></user>`, //same as the selector
    // template: `
    // <h1>Hello {{name}}</h1>
    // <p> Email : {{email}} </p>
    // <p> Address: {{address.city}}, {{address.street}} </p>
    // `, //this is a back tag not a quote so can use multiple line
    template: `

        <ul>
            <li> <a routerLink="/">Home </a></li>
            <li> <a routerLink="/about">About </a></li>
        </ul>
        <router-outlet></router-outlet>`, //instead of user now use router outlet to make it dynamic depending on which route url we are at it is from
})
export class AppComponent  {
    // name = 'Angular';
    // email = 'candiie@gmail.com';
    //
    // address = {
    //     street : 'toa payoh',
    //     city : 'singapore'
    // }
}
