import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.css']
})
export class TurnComponent implements OnInit {

  private playerSign;
  private npcSign = 'Spock';

  constructor() {
  }

  onNotify($event) {
    console.log($event);
    this.playerSign = $event;
  }

  ngOnInit() {
  }
}
