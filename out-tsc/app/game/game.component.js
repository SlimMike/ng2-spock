var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { TurnComponent } from '../turn/turn.component';
export var GameComponent = (function () {
    function GameComponent() {
        this.turns = [];
        this.lives = 3;
    }
    GameComponent.prototype.onTurnEnd = function (turnResult) {
        this.turns.push(turnResult);
        if (!this.isGameOver()) {
            this.queryForNewTurn();
        }
    };
    GameComponent.prototype.isGameOver = function () {
        return this.livesLost() >= this.lives;
    };
    GameComponent.prototype.livesLost = function () {
        return this.turns.reduce(function (previousValue, turn) {
            return previousValue + (turn.isWonByNpc() ? 1 : 0);
        }, 0);
    };
    GameComponent.prototype.queryForNewTurn = function () {
        this.turnComponent.queryForNewTurn();
    };
    GameComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        ViewChild(TurnComponent), 
        __metadata('design:type', TurnComponent)
    ], GameComponent.prototype, "turnComponent", void 0);
    GameComponent = __decorate([
        Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['game.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/game/game.component.js.map