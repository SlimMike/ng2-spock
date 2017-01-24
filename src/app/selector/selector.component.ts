import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['selector.component.scss']
})
export class SelectorComponent implements OnInit {
  @Output() selectedSign: EventEmitter<number> = new EventEmitter<number>();

  public SIGNS = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  public selectedMode: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  selectSign(name: number): void {
    console.log(name);
    this.selectedSign.emit(name);
  }

  setSelectMode(mode) {
    this.selectedMode = mode;
  }
}
