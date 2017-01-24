import { Component, OnInit } from '@angular/core';
import { Sign } from '../sign';
import { Spock } from '../spock';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {

  private playerSign: Sign;
  private npcSign: Sign = new Spock;

  constructor() {
  }

  onPlayerSelectedSign(sign: Sign) {
    this.playerSign = sign;
  }

  ngOnInit() {
  }
}
