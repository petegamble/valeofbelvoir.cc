import { NgModule } from "@angular/core";
import { EventListComponent } from "./event-list.component";
import { EventDetailComponent } from "./event-detail.component";
import { ConvertToSpacesPipe } from "../shared/convert-to-spaces.pipe";
import { RouterModule } from "@angular/router";
import { EventGuardService } from "./event-gaurd.service";
import { EventService } from "./event.service";
import { SharedModule } from "../shared/shared.module"

@NgModule( {
    imports: [
        RouterModule.forChild([
        { path: 'events', component: EventListComponent }, 
        { path: 'events/:id', 
            canActivate: [ EventGuardService ],
            component: EventDetailComponent },
            ]), 
        SharedModule
    ], 
    declarations: [
        EventListComponent, 
        EventDetailComponent, 
        ConvertToSpacesPipe, 
    ], 
    providers: [
        EventService, 
        EventGuardService
    ]
})
export class EventModule { }