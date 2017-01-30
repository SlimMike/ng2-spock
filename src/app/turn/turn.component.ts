import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Sign } from '../sign/sign';
import { TurnResult } from './turn-result';
import { PlayerSelectorComponent } from '../sign/selector/player-selector/player-selector.component';
import { NpcSelectorComponent } from '../sign/selector/npc-selector/npc-selector.component';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['turn.component.scss']
})
export class TurnComponent implements OnInit {
  @Output()
  private turnEnd: EventEmitter<TurnResult>;
  @ViewChild(PlayerSelectorComponent)
  private playerSelectorComponent: PlayerSelectorComponent;
  @ViewChild(NpcSelectorComponent)
  private npcSelectorComponent: NpcSelectorComponent;
  private playerSign: Sign;
  private npcSign: Sign;
  private turnResult: TurnResult;

  constructor() {
    this.turnEnd = new EventEmitter<TurnResult>();
  }

  private onPlayerSelectedSign(sign: Sign): void {
    this.playerSign = sign;

    this.getNpcSign();
  }

  private onNpcSelectedSign(sign: Sign): void {
    this.npcSign = sign;

    this.endTurn();
  }

  private getNpcSign() {
    this.npcSelectorComponent.queryForNewSign();
  }

  private endTurn(): void {
    let result      = new TurnResult(this.playerSign, this.npcSign);
    this.turnResult = result;

    setTimeout(() => {
      this.turnEnd.emit(result);
    }, 3000);
  }

  public queryForNewTurn(): void {
    this.turnResult = null;
    this.playerSelectorComponent.queryForNewSign();
  }

  ngOnInit() {
  }
}
