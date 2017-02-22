import { Component } from '@angular/core';

import { PostsService } from '../services/post.service';

@Component({
    moduleId: module.id, //inorder to use relative paths
    selector: 'user',   //this is what u write in html <my-app>
    templateUrl: 'user.component.html', //this is a back tag not a quote so can use multiple line

    //add a provider
    providers: [PostsService]
})
export class UserComponent  {
    name:string; //only defining the property variable not the value
    email:string;

    //defining with an interface type
    address:address;

    hobbies: string[];

    showHobbies:boolean;
    posts:Post[];

    constructor(private postsService: PostsService){ //add a post service to use the http - cos everything already write in postsservce class


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

                                               //setting posts to an arrow function!? say wah ~ arrow function
        this.postsService.getPosts().subscribe(posts => {
            //console.log(posts);     //bcos gonna return observable so need to subscribe to it
            this.posts = posts;
        });
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

interface Post{
    id:number;
    title: string;
    body: string;
}
