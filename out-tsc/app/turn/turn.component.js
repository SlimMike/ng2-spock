var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { TurnResult } from './turn-result';
import { PlayerSelectorComponent } from '../sign/selector/player-selector/player-selector.component';
import { NpcSelectorComponent } from '../sign/selector/npc-selector/npc-selector.component';
export var TurnComponent = (function () {
    function TurnComponent() {
        this.turnEnd = new EventEmitter();
    }
    TurnComponent.prototype.onPlayerSelectedSign = function (sign) {
        this.playerSign = sign;
        this.getNpcSign();
    };
    TurnComponent.prototype.onNpcSelectedSign = function (sign) {
        this.npcSign = sign;
        this.endTurn();
    };
    TurnComponent.prototype.getNpcSign = function () {
        this.npcSelectorComponent.queryForNewSign();
    };
    TurnComponent.prototype.endTurn = function () {
        var _this = this;
        var result = new TurnResult(this.playerSign, this.npcSign);
        this.turnResult = result;
        setTimeout(function () {
            _this.turnEnd.emit(result);
        }, 3000);
    };
    TurnComponent.prototype.queryForNewTurn = function () {
        this.turnResult = null;
        this.playerSelectorComponent.queryForNewSign();
    };
    TurnComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], TurnComponent.prototype, "turnEnd", void 0);
    __decorate([
        ViewChild(PlayerSelectorComponent), 
        __metadata('design:type', PlayerSelectorComponent)
    ], TurnComponent.prototype, "playerSelectorComponent", void 0);
    __decorate([
        ViewChild(NpcSelectorComponent), 
        __metadata('design:type', NpcSelectorComponent)
    ], TurnComponent.prototype, "npcSelectorComponent", void 0);
    TurnComponent = __decorate([
        Component({
            selector: 'app-turn',
            templateUrl: './turn.component.html',
            styleUrls: ['turn.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TurnComponent);
    return TurnComponent;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/turn/turn.component.js.map