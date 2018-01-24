import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'

import { IEvent } from './event';

@Component ({
    templateUrl: './event-detail.component.html', 
    styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
    pageTitle: string = 'Event Detail'; 
    event: IEvent; 

    constructor(private _route: ActivatedRoute, private _router: Router){

    }

    ngOnInit(){
        let id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`; 
        this.event = {
            "id": 4,
            "title": "X Ride",
            "date": "11/01/2018",
            "level": "Fast",
            "distance": 25,
            "imageUrl": "https://openclipart.org/download/219208/Two-Men-Bicycle-1899.svg",
            "rating": 4.3
        }
    }

    onBack(): void {
        this._router.navigate(['/events'])
    }
}