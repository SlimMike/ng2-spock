var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Sign } from './sign';
import { Scissors } from './scissors';
import { Rock } from './rock';
export var Spock = (function (_super) {
    __extends(Spock, _super);
    function Spock() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[Scissors.name] = 'Spock smashes scissors',
            _a[Rock.name] = 'Spock vaporizes rock',
            _a
        );
        var _a;
    }
    return Spock;
}(Sign));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/spock.js.map