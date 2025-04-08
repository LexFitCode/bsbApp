import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-player-list',
  imports: [NgClass],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  @Input() players: any
  @Input() position: any
  @Input() mobile: any
  activePlayer: string = ""

  @Output() newItemEvent = new EventEmitter<any>();
  selectedValue: string = "";
  selectedCar: string = "";
  statsPlayer(name:string){
    this.activePlayer = name
    this.newItemEvent.emit({name: name, position: this.position})
  }


}
