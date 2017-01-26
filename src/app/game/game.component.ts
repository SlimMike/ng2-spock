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
  private lives: number = 3;

  constructor() {
  }

  onTurnEnd(turnResult: TurnResult) {
    this.turns.push(turnResult);

    if (!this.isGameOver()) {
      this.queryForNewTurn();
    }
  }

  private isGameOver(): boolean {
    return this.livesLost() >= this.lives;
  }

  private livesLost(): number {
    return this.turns.reduce(function(previousValue, turn: TurnResult): number {
      var ll = 0;
      if (turn.isWonByNpc()) {
        ll = 1;
      }

      return previousValue + ll;
    }, 0)
  }

  private queryForNewTurn() {
    this.turnComponent.queryForNewTurn();
  }

  ngOnInit() {
  }
}
