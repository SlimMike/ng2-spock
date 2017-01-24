import { Component, OnInit, ViewChild } from '@angular/core';
import { TurnResult } from '../turn/turn-result';
import { TurnComponent } from '../turn/turn.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild(TurnComponent)
  private turnComponent: TurnComponent;

  private turns: TurnResult[] = [];

  constructor() {
  }

  onTurnEnd(turnResult: TurnResult) {
    this.turns.push(turnResult);

    this.queryForNewTurn();
  }

  private queryForNewTurn() {
    this.turnComponent.queryForNewTurn();
  }

  ngOnInit() {
  }
}
