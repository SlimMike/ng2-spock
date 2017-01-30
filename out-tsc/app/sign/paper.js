var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Sign } from './sign';
import { Rock } from './rock';
import { Spock } from './spock';
export var Paper = (function (_super) {
    __extends(Paper, _super);
    function Paper() {
        _super.apply(this, arguments);
        this.beatsSigns = (_a = {},
            _a[Spock.name] = 'Paper disproves spock',
            _a[Rock.name] = 'Paper covers rock',
            _a
        );
        var _a;
    }
    return Paper;
}(Sign));
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/paper.js.map