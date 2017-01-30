export var TurnResult = (function () {
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
//# sourceMappingURL=/Users/meh/Documents/priv/ng2-spock/src/app/turn/turn-result.js.map