import {Injectable} from '@angular/core'; // wanna inject services from dependency
import { Http, RequestOptions, Headers } from '@angular/http'; //wanna use the http modules
import 'rxjs/add/operator/map'; //wanna use the observables through reactive extenstions & import the map operator so can map the data


//add the injectable operator
@Injectable()
export class PostsService {


    headers:Headers = new Headers({ 'Content-Type': 'application/json' });
    options:RequestOptions =  new RequestOptions({headers: this.headers});


    constructor(private http: Http){
        console.log("Posts Service Initialized");
    }

    getPosts(){
        //make a get request - return an observable
         return this.http.get('http://api-gotnt.azurewebsites.net/GoTnT/User/GetUserPublicInfos')
         //return this.http.get('https://jsonplaceholder.typicode.com/users')
        //return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json()); //and map the response = res, into a json - remeber the () brackets after json!

            //return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }
	
	private convertIdsToJson(ids:string[]) {
		let jsonArray : Array<{ [id: string] : string; }> = [];
		for (let id of ids) {
			let jsonObject = {"AttractionId" : id};
			jsonArray.push(jsonObject);
		}
		return jsonArray;
	}

    getItineraries(){


        let selectedAttractions:string = "{\"AttractionId\" : \"ID_00012\"},{\"AttractionId\" : \"ID_00012\"}";

        let api_link = "http://api-gotnt.azurewebsites.net/GoTnT/Itineraries/GetItinerary";

		let ids : string[] = ["ID_00012", "ID_00013"];
		let attractions = this.convertIdsToJson(ids);
		
		
        let data = JSON.stringify (
            {
                "Locations" : [
                    {
                        "Country": "Singapore",
                        "State": null,
                        "City": "Singapore"
                    }
                ],
                "Attractions" : attractions,
                "Durations" : {
                    "StartDateTime" : null,
                    "EndDateTime" : null,
                    "NumberOfDays" : 1
                },
                "TripProfile" : {
                },
                "DaySettingPreference" : {
                }
            }
        );

        
        console.log(data);

        return this.http.post(api_link, data, this.options).map(res => res.json());

    }
}
