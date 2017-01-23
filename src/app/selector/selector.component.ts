import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from '../sign';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Output() selectedSign: EventEmitter<Sign> = new EventEmitter<Sign>();

  public SIGNS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  public selectedMode:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectSign(name) {
    console.log(name);
    this.selectedSign.emit(name);
  }

  setSelectMode(mode) {
    this.selectedMode = mode;
  }
}
