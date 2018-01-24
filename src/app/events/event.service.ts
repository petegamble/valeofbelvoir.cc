import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/do'; 

import { IEvent } from "./event";


@Injectable()
export class EventService {
    
    private _eventUrl = './api/events/events.json';

    constructor(private _http: HttpClient) {

    }

    getEvents(): Observable<IEvent[]> {
        return this._http.get<IEvent[]>(this._eventUrl)
        .do(data => console.log('All: ' +JSON.stringify(data)))
        .catch(this.handleError); 
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message); 
        return Observable.throw(err.message)
    }

    /*getEvents(): IEvent[]{
        return [
            {
                title: 'Tuesday Club Ride', 
                date: '02/01/2018',
                level: 'Intermediate',
                distance: 35, 
                imageUrl: 'https://openclipart.org/download/219208/Two-Men-Bicycle-1899.svg', 
                rating: 5
            },
            {
                title: 'Thursday Training', 
                date: '04/01/2018',
                level: 'Fast',
                distance: 40,
                imageUrl: 'https://openclipart.org/download/219208/Two-Men-Bicycle-1899.svg', 
                rating: 3
            },
            {
                title: 'Reliability Ride', 
                date: '06/01/2018',
                level: 'All',
                distance: 30,
                imageUrl: 'https://openclipart.org/download/219208/Two-Men-Bicycle-1899.svg', 
                rating: 1.5
            }, 
            {
                title: 'X Ride', 
                date: '11/01/2018',
                level: 'Fast',
                distance: 25,
                imageUrl: 'https://openclipart.org/download/219208/Two-Men-Bicycle-1899.svg', 
                rating: 4.3
            }
          ]; 
    }*/
}