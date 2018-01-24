"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'VBCC';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'vbcc-app',
        template: "\n              <div>\n                <nav class='navbar navbar-default'>\n                  <a class='navbar-brand'>VBCC</a>\n                  <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['/events']\">Event List</a></li>\n                  </ul>\n                </nav>\n              </div>\n              <div class='container'>\n                <router-outlet></router-outlet>\n              </div>\n              "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map