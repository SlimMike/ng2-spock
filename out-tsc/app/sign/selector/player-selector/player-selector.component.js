var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
import { SignFactory } from '../../sign-factory';
export var PlayerSelectorComponent = (function () {
    function PlayerSelectorComponent() {
        this.selectedSign = new EventEmitter();
        this.signs = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        this.selectedMode = false;
        this.shouldReturn = true;
        this.selectedSignName = '';
    }
    PlayerSelectorComponent.prototype.ngOnInit = function () {
    };
    PlayerSelectorComponent.prototype.queryForNewSign = function () {
        this.selectedMode = false;
        this.shouldReturn = true;
        this.selectedSignName = '';
    };
    PlayerSelectorComponent.prototype.selectSign = function (signName) {
        if (!this.shouldReturn) {
            return;
        }
        var sign = SignFactory.createFromString(signName);
        this.selectedSignName = signName;
        this.shouldReturn = false;
        this.selectedSign.emit(sign);
    };
    PlayerSelectorComponent.prototype.setSelectMode = function (mode) {
        this.selectedMode = mode;
    };
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], PlayerSelectorComponent.prototype, "selectedSign", void 0);
    PlayerSelectorComponent = __decorate([
        Component({
            selector: 'app-player-selector',
            templateUrl: './player-selector.component.html',
            styleUrls: ['../selector.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerSelectorComponent);
    return PlayerSelectorComponent;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/selector/player-selector/player-selector.component.js.map