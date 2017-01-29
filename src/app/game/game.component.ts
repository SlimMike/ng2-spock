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

  private onTurnEnd(turnResult: TurnResult): void {
    this.turns.push(turnResult);

    if (!this.isGameOver()) {
      this.queryForNewTurn();
    }
  }

  private isGameOver(): boolean {
    return this.livesLost() >= this.lives;
  }

  private livesLost(): number {
    return this.turns.reduce(function(previousValue: number, turn: TurnResult): number {
      return previousValue + (turn.isWonByNpc() ? 1 : 0);
    }, 0)
  }

  private queryForNewTurn(): void {
    this.turnComponent.queryForNewTurn();
  }

  ngOnInit() {
  }
}
