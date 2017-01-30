var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TurnComponent } from './turn/turn.component';
import { GameComponent } from './game/game.component';
import { HexSvgComponent } from './hex-svg/hex-svg.component';
import { PlayerSelectorComponent } from './sign/selector/player-selector/player-selector.component';
import { NpcSelectorComponent } from './sign/selector/npc-selector/npc-selector.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                TurnComponent,
                GameComponent,
                HexSvgComponent,
                PlayerSelectorComponent,
                NpcSelectorComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/app.module.js.map