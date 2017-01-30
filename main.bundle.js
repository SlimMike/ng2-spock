webpackJsonp([0,3],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spock__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paper__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lizard; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var Lizard = (function (_super) {
    __extends(Lizard, _super);
    function Lizard() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_1__spock__["a" /* Spock */].name] = 'Lizard poisons spock',
            _a[__WEBPACK_IMPORTED_MODULE_2__paper__["a" /* Paper */].name] = 'Lizard eats paper',
            _a
        );
        var _a;
    }
    return Lizard;
}(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* Sign */]));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/lizard.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rock__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spock__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paper; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var Paper = (function (_super) {
    __extends(Paper, _super);
    function Paper() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_2__spock__["a" /* Spock */].name] = 'Paper disproves spock',
            _a[__WEBPACK_IMPORTED_MODULE_1__rock__["a" /* Rock */].name] = 'Paper covers rock',
            _a
        );
        var _a;
    }
    return Paper;
}(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* Sign */]));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/paper.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scissors__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lizard__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rock; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_1__scissors__["a" /* Scissors */].name] = 'Rock crushes scissors',
            _a[__WEBPACK_IMPORTED_MODULE_2__lizard__["a" /* Lizard */].name] = 'Rock crushes lizard',
            _a
        );
        var _a;
    }
    return Rock;
}(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* Sign */]));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/rock.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paper__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lizard__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scissors; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var Scissors = (function (_super) {
    __extends(Scissors, _super);
    function Scissors() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_1__paper__["a" /* Paper */].name] = 'Scissors cuts paper',
            _a[__WEBPACK_IMPORTED_MODULE_2__lizard__["a" /* Lizard */].name] = 'Scissors decapitates lizard',
            _a
        );
        var _a;
    }
    return Scissors;
}(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* Sign */]));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/scissors.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scissors__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rock__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Spock; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



var Spock = (function (_super) {
    __extends(Spock, _super);
    function Spock() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[__WEBPACK_IMPORTED_MODULE_1__scissors__["a" /* Scissors */].name] = 'Spock smashes scissors',
            _a[__WEBPACK_IMPORTED_MODULE_2__rock__["a" /* Rock */].name] = 'Spock vaporizes rock',
            _a
        );
        var _a;
    }
    return Spock;
}(__WEBPACK_IMPORTED_MODULE_0__sign__["a" /* Sign */]));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/spock.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign_factory__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NpcSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NpcSelectorComponent = (function () {
    function NpcSelectorComponent() {
        this.selectedSign = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
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
        var sign = __WEBPACK_IMPORTED_MODULE_1__sign_factory__["a" /* SignFactory */].createFromString(signName);
        this.selectedSignName = signName;
        this.selectedSign.emit(sign);
    };
    NpcSelectorComponent.prototype.getRandomNumber = function (min, max) {
        var randomMax = max - min;
        return Math.floor(min + Math.random() * randomMax);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], NpcSelectorComponent.prototype, "selectedSign", void 0);
    NpcSelectorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-npc-selector',
            template: __webpack_require__(624),
            styles: [__webpack_require__(344)]
        }), 
        __metadata('design:paramtypes', [])
    ], NpcSelectorComponent);
    return NpcSelectorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/npc-selector.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sign_factory__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerSelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerSelectorComponent = (function () {
    function PlayerSelectorComponent() {
        this.selectedSign = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
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
        var sign = __WEBPACK_IMPORTED_MODULE_1__sign_factory__["a" /* SignFactory */].createFromString(signName);
        this.selectedSignName = signName;
        this.shouldReturn = false;
        this.selectedSign.emit(sign);
    };
    PlayerSelectorComponent.prototype.setSelectMode = function (mode) {
        this.selectedMode = mode;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], PlayerSelectorComponent.prototype, "selectedSign", void 0);
    PlayerSelectorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-player-selector',
            template: __webpack_require__(625),
            styles: [__webpack_require__(344)]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerSelectorComponent);
    return PlayerSelectorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/player-selector.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rock__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paper__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scissors__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lizard__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spock__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignFactory; });





var SignFactory = (function () {
    function SignFactory() {
    }
    SignFactory.createFromString = function (name) {
        switch (name) {
            case 'Rock':
                return new __WEBPACK_IMPORTED_MODULE_0__rock__["a" /* Rock */];
            case 'Paper':
                return new __WEBPACK_IMPORTED_MODULE_1__paper__["a" /* Paper */];
            case 'Scissors':
                return new __WEBPACK_IMPORTED_MODULE_2__scissors__["a" /* Scissors */];
            case 'Lizard':
                return new __WEBPACK_IMPORTED_MODULE_3__lizard__["a" /* Lizard */];
            case 'Spock':
                return new __WEBPACK_IMPORTED_MODULE_4__spock__["a" /* Spock */];
        }
        throw 'invalid name';
    };
    return SignFactory;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/sign-factory.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turn_result__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_selector_player_selector_player_selector_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_selector_npc_selector_npc_selector_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TurnComponent = (function () {
    function TurnComponent() {
        this.turnEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
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
        var result = new __WEBPACK_IMPORTED_MODULE_1__turn_result__["a" /* TurnResult */](this.playerSign, this.npcSign);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], TurnComponent.prototype, "turnEnd", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__sign_selector_player_selector_player_selector_component__["a" /* PlayerSelectorComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sign_selector_player_selector_player_selector_component__["a" /* PlayerSelectorComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__sign_selector_player_selector_player_selector_component__["a" /* PlayerSelectorComponent */]) === 'function' && _b) || Object)
    ], TurnComponent.prototype, "playerSelectorComponent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__sign_selector_npc_selector_npc_selector_component__["a" /* NpcSelectorComponent */]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__sign_selector_npc_selector_npc_selector_component__["a" /* NpcSelectorComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__sign_selector_npc_selector_npc_selector_component__["a" /* NpcSelectorComponent */]) === 'function' && _c) || Object)
    ], TurnComponent.prototype, "npcSelectorComponent", void 0);
    TurnComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-turn',
            template: __webpack_require__(626),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], TurnComponent);
    return TurnComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/turn.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports) {

module.exports = "ul {\n  position: relative;\n  width: 310px;\n  height: 322px; }\n  ul li {\n    width: 120px;\n    height: 104px;\n    -webkit-clip-path: url(#hex-flat);\n            clip-path: url(#hex-flat);\n    position: absolute;\n    top: 109px;\n    left: 95px;\n    -webkit-transition: ease-out 0.3s;\n    transition: ease-out 0.3s; }\n    ul li.selectable span {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      background: rgba(0, 0, 0, 0.7);\n      pointer-events: none;\n      font-size: 24px;\n      display: none; }\n    ul li.selectable:hover span {\n      display: block; }\n    ul li.selector {\n      background: url(\"./assets/Backgrounds_The_sign_of_the_anime_Fullmetal_Alchemist_102263_.jpg\") no-repeat center;\n      background-size: cover; }\n    ul li:nth-child(1) {\n      background: url(\"./assets/FyJpNfo.jpg\") no-repeat center;\n      background-size: cover; }\n    ul li:nth-child(2) {\n      background: url(\"./assets/old_armenian_book_by_deviantik.jpg\") no-repeat center;\n      background-size: cover; }\n    ul li:nth-child(3) {\n      background: url(\"./assets/2ea1c50b3ae97c5797a1629215e09f5b.jpg\") no-repeat center;\n      background-size: cover; }\n    ul li:nth-child(4) {\n      background: url(\"./assets/af31cd1d6fa299061ea277affe2afed9.jpg\") no-repeat center;\n      background-size: cover; }\n    ul li:nth-child(5) {\n      background: url(\"./assets/Spock_performing_Vulcan_salute-e1383761091383-640x460.jpg\") no-repeat center;\n      background-size: cover; }\n  ul.selected li {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n  ul.selected li.selected {\n    -webkit-filter: none;\n            filter: none; }\n  ul.select li.selectable:nth-child(1) {\n    left: 0;\n    top: 163.5px; }\n  ul.select li.selectable:nth-child(2) {\n    left: 0;\n    top: 54.5px; }\n  ul.select li.selectable:nth-child(3) {\n    left: 95px;\n    top: 0; }\n  ul.select li.selectable:nth-child(4) {\n    left: 190px;\n    top: 54.5px; }\n  ul.select li.selectable:nth-child(5) {\n    left: 190px;\n    top: 163.5px; }\n"

/***/ }),

/***/ 349:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 349;


/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(460);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(621),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__turn_turn_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_game_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hex_svg_hex_svg_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_selector_player_selector_player_selector_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sign_selector_npc_selector_npc_selector_component__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__turn_turn_component__["a" /* TurnComponent */],
                __WEBPACK_IMPORTED_MODULE_6__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hex_svg_hex_svg_component__["a" /* HexSvgComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sign_selector_player_selector_player_selector_component__["a" /* PlayerSelectorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sign_selector_npc_selector_npc_selector_component__["a" /* NpcSelectorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__turn_turn_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = (function () {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__turn_turn_component__["a" /* TurnComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__turn_turn_component__["a" /* TurnComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__turn_turn_component__["a" /* TurnComponent */]) === 'function' && _a) || Object)
    ], GameComponent.prototype, "turnComponent", void 0);
    GameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__(622),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
    var _a;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/game.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HexSvgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HexSvgComponent = (function () {
    function HexSvgComponent() {
    }
    HexSvgComponent.prototype.ngOnInit = function () {
    };
    HexSvgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-hex-svg',
            template: __webpack_require__(623)
        }), 
        __metadata('design:paramtypes', [])
    ], HexSvgComponent);
    return HexSvgComponent;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/hex-svg.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnResult; });
var TurnResult = (function () {
    function TurnResult(playerSign, npcSign) {
        this.playerSign = playerSign;
        this.npcSign = npcSign;
    }
    TurnResult.prototype.isWonByPlayer = function () {
        return this.playerSign.beats(this.npcSign);
    };
    TurnResult.prototype.isWonByPlayerMessage = function () {
        return this.playerSign.beatsMessage(this.npcSign);
    };
    TurnResult.prototype.isWonByNpc = function () {
        return this.npcSign.beats(this.playerSign);
    };
    TurnResult.prototype.isWonByNpcMessage = function () {
        return this.npcSign.beatsMessage(this.playerSign);
    };
    TurnResult.prototype.isDraw = function () {
        return !this.isWonByPlayer() && !this.isWonByNpc();
    };
    return TurnResult;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/turn-result.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/environment.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/polyfills.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 980px;\n  margin: 0 auto;\n  position: relative;\n  height: 100%;\n  color: #ffffff; }\n"

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = ".game-header .turns p, .game-header .stats p {\n  font-size: 24px;\n  margin-bottom: 10px; }\n\n.game-header .turns {\n  float: left;\n  width: 80%; }\n  .game-header .turns ul {\n    font-size: 16px;\n    list-style: none; }\n\n.game-header .stats {\n  float: right;\n  width: 20%; }\n  .game-header .stats ul {\n    font-size: 20px;\n    list-style: none; }\n"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = ".turn {\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\napp-player-selector {\n  float: left; }\n\napp-npc-selector {\n  float: right; }\n\n.turn-result {\n  width: 100%;\n  margin-bottom: 100px; }\n  .turn-result p {\n    font-size: 60px;\n    text-align: center; }\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-game></app-game>\n</div>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div class=\"game-header\">\n  <div class=\"turns\">\n    <p>Turns history</p>\n    <ul>\n      <li *ngFor=\"let turn of turns | slice:-3\">\n        <h3>Player sign: <span *ngIf=\"turn.playerSign\">{{turn.playerSign.constructor.name}}</span></h3>\n        <h3>Npc sign: <span *ngIf=\"turn.npcSign\">{{turn.npcSign.constructor.name}}</span></h3>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"stats\">\n    <p>Statistics</p>\n    <ul>\n      <!-- @todo slightly abused -->\n      <li>Lives: {{lives - livesLost()}}</li>\n    </ul>\n  </div>\n</div>\n\n<app-turn (turnEnd)=\"onTurnEnd($event)\"></app-turn>"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"0\" height=\"0\" viewbox=\"0 0 120 103.92304845413263\" style=\"position: absolute;\">\n  <clipPath id=\"hex-flat\" clipPathUnits=\"userSpaceOnUse\">\n    <path d=\"M5.000000000000001 60.6217782649107Q0 51.96152422706631 5.000000000000001 43.301270189221924L25 8.660254037844386Q30 0 40 0L80 0Q90 0 95 8.660254037844386L115 43.301270189221924Q120 51.96152422706631 115 60.6217782649107L95 95.26279441628824Q90 103.92304845413263 80 103.92304845413263L40 103.92304845413263Q30 103.92304845413263 25 95.26279441628824Z\"></path>\n  </clipPath>\n</svg>"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<ul [ngClass]=\"{select: selectedMode, selected: true}\">\n  <li [ngClass]=\"{selected: sign == selectedSignName, selectable: true}\" *ngFor=\"let sign of signs\">\n    <span>{{sign}}</span>\n  </li>\n\n  <li class=\"selector\">\n  </li>\n</ul>\n\n<app-hex-svg></app-hex-svg>"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<ul [ngClass]=\"{select: selectedMode, selected: selectedSignName}\">\n  <li [ngClass]=\"{selected: sign == selectedSignName, selectable: true}\" *ngFor=\"let sign of signs\" (click)=\"selectSign(sign)\">\n    <span>{{sign}}</span>\n  </li>\n\n  <li class=\"selector\" (click)=\"setSelectMode(!selectedMode)\">\n  </li>\n</ul>\n\n<app-hex-svg></app-hex-svg>"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<div class=\"turn\">\n  <div *ngIf=\"turnResult\" class=\"turn-result\">\n    <p *ngIf=\"turnResult.isWonByPlayer()\">\n      {{turnResult.isWonByPlayerMessage()}}\n    </p>\n    <p *ngIf=\"turnResult.isWonByNpc()\">\n      {{turnResult.isWonByNpcMessage()}}\n    </p>\n    <p *ngIf=\"turnResult.isDraw()\">\n      Draw round\n    </p>\n  </div>\n  <app-player-selector (selectedSign)=\"onPlayerSelectedSign($event)\"></app-player-selector>\n  <app-npc-selector (selectedSign)=\"onNpcSelectedSign($event)\"></app-npc-selector>\n</div>"

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(350);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sign; });
var Sign = (function () {
    function Sign() {
    }
    Sign.prototype.beats = function (other) {
        return this.beatsSigns.hasOwnProperty(other.constructor.name);
    };
    Sign.prototype.beatsMessage = function (other) {
        if (!this.beats(other)) {
            throw 'Does not beat';
        }
        return this.beatsSigns[other.constructor.name];
    };
    return Sign;
}());
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/sign.js.map

/***/ })

},[640]);
//# sourceMappingURL=main.bundle.map