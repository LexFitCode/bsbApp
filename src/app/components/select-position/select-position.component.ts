import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-select-position',
  imports: [MatRadioModule, NgClass],
  templateUrl: './select-position.component.html',
  styleUrl: './select-position.component.scss'
})
export class SelectPositionComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  statsPlayer(position: string){
    this.newItemEvent.emit(position)
  }
  positions =["pitcher", "hitter"]
}
