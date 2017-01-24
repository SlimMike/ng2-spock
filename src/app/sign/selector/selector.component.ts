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

  public signs: string[] = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  private selectedMode: boolean = false;
  private shouldReturn: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

  selectSign(signName: string) {
    if (!this.shouldReturn) {
      return;
    }

    let sign = SignFactory.createFromString(signName);
    this.selectedSign.emit(sign);
    this.shouldReturn = false;
  }

  setSelectMode(mode) {
    this.selectedMode = mode;
  }
}
