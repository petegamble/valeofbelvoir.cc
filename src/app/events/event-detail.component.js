"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EventDetailComponent = (function () {
    function EventDetailComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Event Detail';
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += ": " + id;
        this.event = {
            "id": 4,
            "title": "X Ride",
            "date": "11/01/2018",
            "level": "Fast",
            "distance": 25,
            "imageUrl": "https://openclipart.org/download/219208/Two-Men-Bicycle-1899.svg",
            "rating": 4.3
        };
    };
    EventDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/events']);
    };
    return EventDetailComponent;
}());
EventDetailComponent = __decorate([
    core_1.Component({
        templateUrl: './event-detail.component.html',
        styleUrls: ['./event-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], EventDetailComponent);
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.component.js.map