export var Sign = (function () {
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
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/sign/sign.js.map