import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Sign } from '../sign/sign';
import { Spock } from '../sign/spock';
import { TurnResult } from './turn-result';
import { SelectorComponent } from '../sign/selector/selector.component';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {
  @Output()
  private turnEnd: EventEmitter<TurnResult>;
  @ViewChild(SelectorComponent)
  private selectorComponent: SelectorComponent;
  private playerSign: Sign;
  private npcSign: Sign;

  constructor() {
    this.npcSign = new Spock;
    this.turnEnd = new EventEmitter<TurnResult>()
  }

  private onPlayerSelectedSign(sign: Sign): void {
    this.playerSign = sign;

    this.endTurn();
  }

  private endTurn(): void {
    let result = new TurnResult(this.playerSign, this.npcSign);

    this.turnEnd.emit(result);
  }

  public queryForNewTurn(): void {
    this.selectorComponent.queryForNewSign();
  }

  ngOnInit() {
  }
}
