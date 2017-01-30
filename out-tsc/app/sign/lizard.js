var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Sign } from './sign';
import { Spock } from './spock';
import { Paper } from './paper';
export var Lizard = (function (_super) {
    __extends(Lizard, _super);
    function Lizard() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[Spock.name] = 'Lizard poisons spock',
            _a[Paper.name] = 'Lizard eats paper',
            _a
        );
        var _a;
    }
    return Lizard;
}(Sign));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/lizard.js.map