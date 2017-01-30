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
export var NpcSelectorComponent = (function () {
    function NpcSelectorComponent() {
        this.selectedSign = new EventEmitter();
        this.signs = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        this.selectedMode = false;
        this.selectedSignName = '';
    }
    NpcSelectorComponent.prototype.ngOnInit = function () {
    };
    NpcSelectorComponent.prototype.queryForNewSign = function () {
        this.selectedSignName = '';
        this.selectedMode = true;
        this.getRandomSign();
    };
    /**
     * @todo use promises?
     */
    NpcSelectorComponent.prototype.getRandomSign = function () {
        this.selectNextSign(0, this.getRandomNumber(11, 21));
    };
    NpcSelectorComponent.prototype.selectNextSign = function (current, max) {
        var _this = this;
        return setTimeout(function () {
            var currentSign = _this.signs[current % _this.signs.length];
            _this.selectedSignName = currentSign;
            if (current >= max) {
                setTimeout(function () {
                    _this.selectSign(currentSign);
                }, 1600);
                return 'done';
            }
            return _this.selectNextSign(current + 1, max);
        }, 400);
    };
    NpcSelectorComponent.prototype.selectSign = function (signName) {
        this.selectedMode = false;
        var sign = SignFactory.createFromString(signName);
        this.selectedSignName = signName;
        this.selectedSign.emit(sign);
    };
    NpcSelectorComponent.prototype.getRandomNumber = function (min, max) {
        var randomMax = max - min;
        return Math.floor(min + Math.random() * randomMax);
    };
    __decorate([
        Output(), 
        __metadata('design:type', EventEmitter)
    ], NpcSelectorComponent.prototype, "selectedSign", void 0);
    NpcSelectorComponent = __decorate([
        Component({
            selector: 'app-npc-selector',
            templateUrl: './npc-selector.component.html',
            styleUrls: ['../selector.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], NpcSelectorComponent);
    return NpcSelectorComponent;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/selector/npc-selector/npc-selector.component.js.map