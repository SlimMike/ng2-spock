import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sign } from '../../sign';
import { SignFactory } from '../../sign-factory';

@Component({
  selector: 'app-npc-selector',
  templateUrl: './npc-selector.component.html',
  styleUrls: ['../selector.scss']
})
export class NpcSelectorComponent implements OnInit {
  @Output() selectedSign: EventEmitter<Sign> = new EventEmitter<Sign>();

  public signs: string[]           = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  private selectedMode: boolean    = false;
  private selectedSignName: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  public queryForNewSign(): void {
    this.selectedSignName = '';
    this.selectedMode     = true;
    this.getRandomSign();
  }

  /**
   * @todo use promises?
   */
  private getRandomSign() {
    this.selectNextSign(0, this.getRandomNumber(11, 21));
  }

  private selectNextSign(current, max) {
    return setTimeout(() => {
      let currentSign       = this.signs[current % this.signs.length];
      this.selectedSignName = currentSign;

      if (current >= max) {
        setTimeout(() => {
          this.selectSign(currentSign);
        }, 1600);

        return 'done';
      }

      return this.selectNextSign(current + 1, max);
    }, 400);
  }

  private selectSign(signName: string): void {
    this.selectedMode     = false;
    let sign              = SignFactory.createFromString(signName);
    this.selectedSignName = signName;
    this.selectedSign.emit(sign);
  }

  private getRandomNumber(min: number, max: number): number {
    let randomMax = max - min;
    return Math.floor(min + Math.random() * randomMax);
  }
}
