import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from '../sign/sign';
import { Spock } from '../sign/spock';
import { TurnResult } from './turn-result';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {
  @Output() turnEnd: EventEmitter<TurnResult> = new EventEmitter<TurnResult>();

  private playerSign: Sign;
  private npcSign: Sign;

  constructor() {
    this.npcSign = new Spock;
  }

  onPlayerSelectedSign(sign: Sign) {
    this.playerSign = sign;

    this.endTurn();
  }

  endTurn() {
    let result = new TurnResult(this.playerSign, this.npcSign);

    this.turnEnd.emit(result);
  }

  public queryForNewTurn() {
    console.log('ding');
  }

  ngOnInit() {
  }
}
