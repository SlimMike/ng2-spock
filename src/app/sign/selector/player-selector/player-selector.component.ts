import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from '../../sign';
import { SignFactory } from '../../sign-factory';

@Component({
  selector: 'app-player-selector',
  templateUrl: './player-selector.component.html',
  styleUrls: ['../selector.scss']
})
export class PlayerSelectorComponent implements OnInit {
  @Output() selectedSign: EventEmitter<Sign> = new EventEmitter<Sign>();

  public signs: string[]           = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  private selectedMode: boolean    = false;
  private shouldReturn: boolean    = true;
  private selectedSignName: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  public queryForNewSign(): void {
    this.selectedMode     = false;
    this.shouldReturn     = true;
    this.selectedSignName = '';
  }

  private selectSign(signName: string): void {
    if (!this.shouldReturn) {
      return;
    }

    let sign              = SignFactory.createFromString(signName);
    this.selectedSignName = signName;
    this.shouldReturn     = false;
    this.selectedSign.emit(sign);
  }

  private setSelectMode(mode): void {
    this.selectedMode = mode;
  }
}
