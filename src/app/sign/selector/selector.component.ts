import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from '../sign';
import { SignFactory } from '../sign-factory';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Output() selectedSign: EventEmitter<Sign> = new EventEmitter<Sign>();

  public SIGNS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  private selectedMode: boolean = false;
  private resultReturned: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectSign(signName) {
    if (this.resultReturned) {
      return;
    }

    let sign = SignFactory.createFromString(signName);
    this.resultReturned = true;
    this.selectedSign.emit(sign);
  }

  setSelectMode(mode) {
    this.selectedMode = mode;
  }
}
