"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var event_list_component_1 = require("./event-list.component");
var event_detail_component_1 = require("./event-detail.component");
var convert_to_spaces_pipe_1 = require("../shared/convert-to-spaces.pipe");
var router_1 = require("@angular/router");
var event_gaurd_service_1 = require("./event-gaurd.service");
var event_service_1 = require("./event.service");
var shared_module_1 = require("../shared/shared.module");
var EventModule = (function () {
    function EventModule() {
    }
    return EventModule;
}());
EventModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'events', component: event_list_component_1.EventListComponent },
                { path: 'events/:id',
                    canActivate: [event_gaurd_service_1.EventGuardService],
                    component: event_detail_component_1.EventDetailComponent },
            ]),
            shared_module_1.SharedModule
        ],
        declarations: [
            event_list_component_1.EventListComponent,
            event_detail_component_1.EventDetailComponent,
            convert_to_spaces_pipe_1.ConvertToSpacesPipe,
        ],
        providers: [
            event_service_1.EventService,
            event_gaurd_service_1.EventGuardService
        ]
    })
], EventModule);
exports.EventModule = EventModule;
//# sourceMappingURL=event.module.js.map