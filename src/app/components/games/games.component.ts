import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent implements OnInit{
  @Input() games: any
  @Input() mobile: any
  @Output() newItemEvent = new EventEmitter<any>();

  playersToFollowPersonalData: any = {};
  playersIcons: any= []
  playersIconsHitter: any = []
  constructor(private PlayersService: PlayersService) { }
  ngOnInit(): void {
    this.setIconsApi()
    this.setIconsApiPitchers()
    //this.playersIcons = Object.values(icons) //offline
  }
  setIconsApi(){
    this.PlayersService.getPlayers().subscribe((data)=>{
      this.playersIcons = data
    })
  }
  setIconsApiPitchers(){
    this.PlayersService.getPlayersHitters().subscribe((data)=>{
      this.playersIconsHitter = data
    })
  }
  playersToFollow(home: string, away: string) {
    this.playersToFollowPersonalData = {}
    this.playersToFollowPersonalData.hitters = []
    this.playersToFollowPersonalData.pitchers = []

    const names = this.playersIcons;
    for (const property in names) {
      const team = names[property].team;
      if (home !== undefined || away !== undefined) {
        if (team?.includes(home) || team?.includes(away)) {
          this.playersToFollowPersonalData.pitchers.push(names[property]);
        }
      }
    }
    const names2 = this.playersIconsHitter;
    for (const property in names2) {
      const team = names2[property].team;
      if (home !== undefined || away !== undefined) {
        if (team?.includes(home) || team?.includes(away)) {
          this.playersToFollowPersonalData.hitters.push(names2[property]);
        }
      }
    }
    this.newItemEvent.emit(this.playersToFollowPersonalData)
  }
}
