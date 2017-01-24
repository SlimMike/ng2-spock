import { Sign } from '../sign/sign';

export class TurnResult {
  private playerSign: Sign;
  private npcSign: Sign;

  constructor(playerSign: Sign, npcSign: Sign) {
    this.playerSign = playerSign;
    this.npcSign = npcSign;
  }

  public isWonByPlayer(): boolean {
    return false;
  }

  public isWonByNpc(): boolean {
    return false;
  }

  public isDraw(): boolean {
    return !this.isWonByPlayer() && !this.isWonByNpc();
  }
}
