import {Injectable} from '@angular/core'; // wanna inject services from dependency
import { Http } from '@angular/http'; //wanna use the http modules
import 'rxjs/add/operator/map'; //wanna use the observables through reactive extenstions & import the map operator so can map the data


//add the injectable operator
@Injectable()
export class PostsService {

    constructor(private http: Http){
        console.log("Posts Service Initialized");
    }

    getPosts(){
        //make a get request - return an observable
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json()); //and map the response = res, into a json - remeber the () brackets after json!
    }
}
