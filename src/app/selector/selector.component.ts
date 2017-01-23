import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  public SIGNS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  public selectedMode = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectedSign(name) {
    console.log(name);
    this.notify.emit(name);
  }

  setSelectMode(mode) {
    this.selectedMode = mode;
  }
}
