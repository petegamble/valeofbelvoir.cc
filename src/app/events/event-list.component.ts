import { Component, OnInit } from '@angular/core';
import { IEvent } from './event'
import { EventService } from './event.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit { 
  pageTitle: string = 'Events List! YAY!!!';
  imageWidth: number = 50; 
  showImages: boolean = false;
  
  _listFilter: string; 
  get listFilter(): string{
      return this._listFilter;
  }
  set listFilter(value: string){
      this._listFilter = value; 
      this.filteredEvents = this.listFilter ? this.performFilter(this.listFilter) : this.events; 
  }
  filteredEvents: IEvent[]; 

  events: IEvent[] = []; 
  errorMessage: string; 

  constructor(private _eventService: EventService){
  }

  ngOnInit(): void {
    this._eventService.getEvents().subscribe(
    events => {
        this.events = events; 
        this.filteredEvents = this.events; 
    }, 
    error => this.errorMessage = <any>error);
  }

  performFilter(filterBy: string): IEvent[]{
    filterBy = filterBy.toLocaleLowerCase(); 
    return this.events.filter((event: IEvent) => event.title.toLocaleLowerCase().indexOf(filterBy) != -1); 
  }

  onRatingClicked(message: string): void{
      this.pageTitle = message; 
  }

  toggleImage(): void {
      this.showImages = !this.showImages 
  }
}