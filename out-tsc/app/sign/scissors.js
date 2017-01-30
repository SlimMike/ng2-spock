var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Sign } from './sign';
import { Paper } from './paper';
import { Lizard } from './lizard';
export var Scissors = (function (_super) {
    __extends(Scissors, _super);
    function Scissors() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[Paper.name] = 'Scissors cuts paper',
            _a[Lizard.name] = 'Scissors decapitates lizard',
            _a
        );
        var _a;
    }
    return Scissors;
}(Sign));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/scissors.js.map