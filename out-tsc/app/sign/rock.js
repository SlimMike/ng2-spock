var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Sign } from './sign';
import { Scissors } from './scissors';
import { Lizard } from './lizard';
export var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[Scissors.name] = 'Rock crushes scissors',
            _a[Lizard.name] = 'Rock crushes lizard',
            _a
        );
        var _a;
    }
    return Rock;
}(Sign));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/rock.js.map