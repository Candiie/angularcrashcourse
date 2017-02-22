import { Component } from '@angular/core';

@Component({
    selector: 'user',   //this is what u write in html <my-app>
    template: `
    <h1>Hello {{name}}</h1>
    <p> Email : {{email}} </p>
    <p> Address: {{address.city}}, {{address.street}} </p>

    <!-- when ever you wanna use an event, just use the parenthesis and the functionname -->
    <!-- in this case we are trying click - (click) -->

    <button (click)="toggleHobbies()"> click me to {{showHobbies ? "Hide Hobbies" : "Show Hobbies" }}</button>

    <!-- you can also do a else in the {{}} << what issit call? anw ^^^^^ refering to the above, if showHobbies is true show "Hide Hobbies" else show "Show Hobbies"-->

    <div *ngIf="showHobbies">
        <h3> Hobbies </h3>

        <!-- looping through the array -->
        <ul>
            <li *ngFor="let hobby of hobbies; let i = index"> <!-- using of ngFor-->
                {{hobby}} <button (click)="deleteHobby(i)"> X </button>
            </li>
        </ul>
    </div>

    <!-- Inputs and data binding (with ngModel) -->

    <hr/>

    <h2> Edit User Details </h2> <br/>

    <form>
        <label> Name: </label> <br/>
        <input type="text" name="name" [(ngModel)]="name" /> <!-- no have ; semi-colon after code in html-->
        <br/>
        <br/>
        <label> City: </label> <br/>
        <input type="text" name="address.city" [(ngModel)]="address.city" /> <!-- no have ; semi-colon after code in html-->

    </form>

    <br/>

    <!-- Inputs and data binding (without ngModel) -->

    <form (submit)="addHobby(hobby.value)">
        <label> Add Hobby: </label> <br/>
        <input type="text" #hobby /> <br/>
    </form>

    `, //this is a back tag not a quote so can use multiple line
})
export class UserComponent  {
    name:string; //only defining the property variable not the value
    email:string;

    //defining with an interface type
    address:address;

    hobbies: string[];

    showHobbies:boolean;

    constructor(){


        this.name = 'Angular';
        this.email = 'candiie@gmail.com';

        this.address = {
            street : 'toa payoh',
            city : 'singapore'
        }

        this.hobbies = ['Music', 'Sports', 'Programming'];

        console.log("ran!");
        this.name = 'Candiie';

        this.showHobbies = false;
    }


    toggleHobbies(){

        if(this.showHobbies){
            this.showHobbies = false;
        }else{
            this.showHobbies = true;
        }
        console.log("show hobbies!");
    };


    addHobby(hobby:string){
        this.hobbies.push(hobby);
    };


    deleteHobby(i:number){
        this.hobbies.splice(i, 1); //delete the index and 1 item from the starting index list
    };
}

//defining with an interface
interface address {
    street: string;
    city: string;
}
