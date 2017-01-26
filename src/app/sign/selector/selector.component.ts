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

  public queryForNewSign(): void {
    this.shouldReturn = true;
  }

  private selectSign(signName: string): void {
    if (!this.shouldReturn) {
      return;
    }

    let sign = SignFactory.createFromString(signName);
    this.shouldReturn = false;
    this.selectedSign.emit(sign);
  }

  private setSelectMode(mode): void {
    this.selectedMode = mode;
  }
}
