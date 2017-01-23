import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['selector.component.scss']
})
export class SelectorComponent implements OnInit {

  public SIGNS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  public selectedMode = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectedSign(name) {
    console.log(name);
  }

  setSelectMode(mode) {
    this.selectedMode = mode;
  }
}
