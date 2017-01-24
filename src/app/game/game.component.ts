import { Component, OnInit } from '@angular/core';
import { TurnResult } from '../turn/turn-result';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  onTurnEnd(turnResult: TurnResult) {
    console.log(turnResult);
  }

  ngOnInit() {
  }
}
