import { Sign } from '../sign/sign';

export class TurnResult {
  public playerSign: Sign;
  public npcSign: Sign;

  constructor(playerSign: Sign, npcSign: Sign) {
    this.playerSign = playerSign;
    this.npcSign = npcSign;
  }

  public isWonByPlayer(): boolean {
    return this.playerSign.beats(this.npcSign);
  }

  public isWonByNpc(): boolean {
    return this.npcSign.beats(this.playerSign);
  }

  public isDraw(): boolean {
    return !this.isWonByPlayer() && !this.isWonByNpc();
  }
}
